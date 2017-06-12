<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header"> <h1>
        Data Tables
        <small>advanced tables</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Tables</a></li>
        <li class="active">Data tables</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
       <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Add New Post</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" id="title" placeholder="Enter Title" v-model="post.title" @keyup.enter="addNewPost()">
                </div>
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button type="button" class="btn btn-primary" @click="addNewPost()">Save</button>
              </div>
            </form>
          </div>
          <!-- /.box -->
          </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Hover Data Table</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="postsTable" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->

		<div class="modal fade" id="modal-edit">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">Edit Post</h4>
					</div>
					<div class="modal-body">
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" id="title" placeholder="Enter Title" v-model="post.title" @keyup.enter="updatePost()">
                </div>
              </div>
              <!-- /.box-body -->
            </form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default pull-left" @click="updatePost()" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" @click="updatePost()" data-dismiss="modal">Update</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->

  </div>
  <!-- /.content-wrapper -->

</template>

<script>
import Vue from 'vue'
import {firebaseDB as db} from '../services/Firebase'
const postsRef = db.ref('posts')

export default {
  name: 'datatables',
  firebase: {
    posts: postsRef
  },
  mounted () {
    this.$table = $('#postsTable').DataTable()
    this.$table.clear().draw()
  },
  watch: {
    posts () {
      const _self = this
      this.$table.clear().draw()

      if (_self.posts.length) {
        _self.posts.forEach(post => {

          let postKey = post['.key']
          let RemoveButton = Vue.extend({
            template: `
              <div class="btn-group">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Action <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a v-on:click="showEditPost()">Edit</a></li>
                    <li><a v-on:click="removePost()">Remove</a></li>
                  </ul>
                </div>
              `,
            methods: {
              showEditPost () {
								$('#modal-edit').modal()

								postsRef.child(postKey).once('value').then(snapshot => {
                  let value = snapshot.val()
                  _self.post = value
                  _self.post.key = postKey
                })

                // postsRef.child(postKey).once('value').then(snapshot => {
                //   let value = snapshot.val()
                //   console.log(value)
                // })
                // console.log(postKey + ' edited')
              },
              removePost () {
                console.log(postKey + ' removed')
              }
            }
          })

          let rowNode = _self.$table.row.add([ post.title, `<div></div>` ]).draw().node()
          let tempButton = $(rowNode.childNodes[1].childNodes[0])[0]
          new RemoveButton().$mount(tempButton)
        })// end of forEach
      }
    },
    post () {
      console.log(this.post)
    }
  },
  data () {
    return {
      $table: '',
      post: {
        title: ''
      },
      posts: postsRef
    }
  },
  methods: {
    addNewPost () {
      const _self = this

      if (this.post.title) {
        this.post.title = this.post.title.trim()
        if (this.post.title !== '') {
          postsRef.push(this.post)
          _self.post = {}
        }
      }
    },
    updatePost () {
      postsRef.child(this.post.key).set({ title: this.post.title })
    }
  }
}
</script>

