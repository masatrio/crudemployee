<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <title>MIS PT. Makmur Sentosa</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="http://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="my.css">
    <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css"></style>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
  </head>

  <body>
    <center><h1>MIS PT. Makmur Sentosa</h1></center>
    <div class="col-2" id="mainmenu">
      <span class="menutitle">MENU</span>
      <center><a href="#" class="btn btn-primary tombol" style="margin-top:10px;" id="create">Tambah Data</a></center>
      <center><a href="#" class="btn btn-primary tombol" id="cek">Lihat dan Sortir Data</a></center>
      <center><a href="#" class="btn btn-primary tombol" id="edit">Edit dan Hapus Data</a></center>
    </div>
    <div class="col-8" id="main-form">
        <div id="create-form">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter Username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" class="form-control" id="fullname" placeholder="Enter Full Name">
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="Enter City">
          </div>
          <div class="form-group">
            <label for="city">Status</label>
            <select class="form-control" id="status">
              <option value="" selected disabled>Please select status</option>
            <option>Menikah</option>
            <option>Lajang</option>
            </select>
          </div>
          <button type="submit" id="submit-create" class="btn btn-primary" style="float:right">Submit</button>
        </div>
        <table class="table table-striped" id="tabel-cek">
          <div class="table responsive">
            <thead>
              <tr>
                <th>Username</th>
                <th>Fullname</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="tabelcekdata">
              <!-- data from jquery here -->
            </tbody>
          </div>
        </table>
        <table class="table table-striped" id="tabel-edit">
          <div class="table responsive">
            <thead>
              <tr>
                <th>Username</th>
                <th>Fullname</th>
                <th>City</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="tabeleditdata">
              <!-- data from jquery here -->
            </tbody>
          </div>
        </table>
    </div>
    <!-- <div class="col-8" style="margin-left:21%">
    </div> -->
    <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closemodal">&times;</span>
          <!--  Modal Content -->
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="editusername" placeholder="Enter Username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="editpassword" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" class="form-control" id="editfullname" placeholder="Enter Full Name">
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" id="editcity" placeholder="Enter City">
          </div>
          <div class="form-group">
            <label for="city">Status</label>
            <select class="form-control" id="editstatus">
              <option value="" selected disabled>Please select status</option>
            <option>Menikah</option>
            <option>Lajang</option>
            </select>
          </div>
          <button type="submit" id="submit-edit" class="btn btn-primary" style="float:right">Submit</button>
          <!--  End of Modal Content-->
        </div>
    </div>
  </body>
</html>
