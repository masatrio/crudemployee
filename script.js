$(document).ready(function(){

  $('#submit-edit').on('click',function() {
    var id = $(this).attr('data-id');
    var username = $('#editusername').val();
    var password = $('#editpassword').val();
    var fullname = $('#editfullname').val();
    var city = $('#editcity').val();
    var status = $('#editstatus').val();
    $.ajax({
      method: "POST",
      url: "ajax.php",
      data: { id : id , username : username, password : password, fullname : fullname, city : city, status : status, type : 'update' },
      success: function(data){

        $('#barisdata_'+id).remove();
        $('#tabeleditdata').prepend('<tr id="barisdata_'+id+'"><th scope="row">'+username+'</th><td>'+fullname+'</td><td>'+city+'</td><td>'+status+'</td><td><a href="#" class="btn btn-primary" id="btnedit" data-id="'+id+'">Edit</a><a href="#" class="btn btn-primary" id="btndelete" data-id="'+id+'">Hapus</a></td></tr>')
        $('#myModal').fadeOut('fast');
        alert('Berhasil mengedit data');
        $('#btnedit').on('click',function () {
          var data_id = $(this).attr('data-id');
          $.ajax({
            method: "POST",
            url: "ajax.php",
            data: { id: data_id, type : 'select' },
            success: function(data){
              var datas = JSON.parse(data);
               $.each(datas, function(i, item) {
                  $('#editusername').val(item.username);
                  $('#editpassword').val(item.password);
                  $('#editfullname').val(item.fullname);
                  $('#editcity').val(item.city);
                  if(item.status== 'Menikah'){
                    $("#editstatus")[0].selectedIndex = 1;
                  }else{
                    $("#editstatus")[0].selectedIndex = 2;
                  }

                  $('#submit-edit').attr('data-id',item.id);
               });
             }
           });
           $('#myModal').fadeIn('slow');
         });
      }
    });
  })

  $('#closemodal').on('click',function() {
    $('#myModal').hide();
  })
  $('#cek').on('click',function() {
    $('#tabel-edit_wrapper').hide();
    $('#tabelcekdata').html('');
    $('#create-form').hide();
    $('#main-form').fadeIn('slow');
    $('#tabel-cek_wrapper').fadeIn('slow');
    $('#tabel-cek').fadeIn('slow');
    $.ajax({
      method: "POST",
      url: "ajax.php",
      data: { type : 'get' },
      success: function(data){
        var datas = JSON.parse(data);
        $.each(datas, function(i, item) {
            $('#tabelcekdata').prepend('<tr><th scope="row">'+item.username+'</th><td>'+item.fullname+'</td><td>'+item.city+'</td><td>'+item.status+'</td></tr>')
                });
                $('#tabel-cek').dataTable();
      }
    });
  });

  $('#edit').on('click',function() {
    $('#tabel-cek_wrapper').hide();
    $('#tabeleditdata').html('');
    $('#create-form').hide();
    $('#main-form').fadeIn('slow');
    $('#tabel-edit_wrapper').fadeIn('slow');
    $('#tabel-edit').fadeIn('slow');
    $("#btndelete").on('click',function(){
      var data_id = $(this).attr('data-id');
      console.log(data_id);
      $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { id : data_id, type : 'delete' },
        success: function(data){
              $('#barisdata_'+data_id).remove();
        }
      });
    });
    $.ajax({
      method: "POST",
      url: "ajax.php",
      data: { type : 'get' },
      success: function(data){
        var datas = JSON.parse(data);
        $.each(datas, function(i, item) { //<a href="#" class="btn btn-primary tombol" style="margin-top:10px;" id="create">Tambah Data</a>
            $('#tabeleditdata').prepend('<tr id="barisdata_'+item.id+'"><th scope="row">'+item.username+'</th><td>'+item.fullname+'</td><td>'+item.city+'</td><td>'+item.status+'</td><td><a href="#" class="btn btn-primary" id="btnedit" data-id="'+item.id+'">Edit</a><a href="#" class="btn btn-primary" id="btndelete" data-id="'+item.id+'">Hapus</a></td></tr>')
            $("#btndelete").on('click',function(){
              var data_id = $(this).attr('data-id');
              console.log(data_id);
              $.ajax({
                method: "POST",
                url: "ajax.php",
                data: { id : data_id, type : 'delete' },
                success: function(data){
                      //$('#barisdata_'+data_id).remove();
                      $('#barisdata_'+data_id).hide('slow', function(){ $('#barisdata_'+data_id).remove(); });
                      alert('Berhasil menghapus data');
                }
              });
            });


            $('#btnedit').on('click',function () {

              var data_id = $(this).attr('data-id');
              $.ajax({
                method: "POST",
                url: "ajax.php",
                data: { id: data_id, type : 'select' },
                success: function(data){
                  var datas = JSON.parse(data);
                   $.each(datas, function(i, item) {
                      $('#editusername').val(item.username);
                      $('#editpassword').val(item.password);
                      $('#editfullname').val(item.fullname);
                      $('#editcity').val(item.city);
                      if(item.status== 'Menikah'){
                        $("#editstatus")[0].selectedIndex = 1;
                      }else{
                        $("#editstatus")[0].selectedIndex = 2;
                      }

                      $('#submit-edit').attr('data-id',item.id);
                   });
                 }
               });
               $('#myModal').fadeIn('slow');
             });

          });
              $('#tabel-edit').dataTable();
      }
    });
  });

  $('#create').on('click',function(){
    $('#tabel-cek_wrapper').hide();
    $('#tabel-edit_wrapper').hide();
    $('#main-form').fadeIn('slow');
    $('#create-form').fadeIn('slow');
    $('#create-form input').val("");
  });

  $('#submit-create').on('click',function(){
      var username = ($('#username').val());
      var password = ($('#password').val());
      var fullname = ($('#fullname').val());
      var city = $('#city').val();
      var status = $( "#status option:selected" ).text();
      if(username == "" || password == "" || fullname == "" || city == "" || status == "" || status == "Please select status"){
        $('#create-form input').val("");
        $("#status")[0].selectedIndex = 0;
        alert('Data yang diisi belum lengkap');
        return;
      }
      $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { username : username, password : password, fullname : fullname, city : city, status : status, type : 'insert' },
        success: function(data){
          alert('data berhasil masuk');
          $('#create-form input').val("");
          $("#status")[0].selectedIndex = 0;
        }
      });
  });
});
