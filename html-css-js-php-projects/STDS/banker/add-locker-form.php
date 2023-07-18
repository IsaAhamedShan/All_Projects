<?php session_start();
// Database Connection
include('includes/config.php');
//Validating Session
if (strlen($_SESSION['aid']) == 0) {
  header('location:index.php');
} else {

  if (isset($_POST['submit'])) {
    $ahname = $_POST['ahname'];
    $firm = $_POST['firm'];
    $emailid = $_POST['emailid'];
    $mobilenumber = $_POST['mobilenumber'];
    $comadd = $_POST['comadd'];
    $haircolor = $_POST['haircolor'];
    $eyecolor = $_POST['eyecolor'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];

    $lockerprice1month = $_POST['onemonthcost'];

    $lockersi = $_POST['lockersize'];
    $lockersiz = mysqli_query($con, "select SizeofLocker from tbllockertype where Priceoflocker='$lockersi'");

    if (mysqli_num_rows($lockersiz) > 0) {
      // Fetch the first row from the result set
      $row = mysqli_fetch_array($lockersiz);

      // Get the value of the 'SizeofLocker' column from the fetched row
      $lockersize = $row[0]; // Or $row['SizeofLocker']

      // Now $sizeofLocker contains the varchar value of the 'SizeofLocker' column for the given price of locker
      // You can use this value as needed
    }
    $lockernum = $_POST['lockernum'];

    $expiredateofLocker = $_POST['expiredate'];
    // $expiredateofLocker = date('Y-m-d', strtotime($_POST['expiredate']));
    $expiredateofLocker = date('Y-m-d', strtotime("+" . $expiredateofLocker . " months"));
    $totalcost = $_POST['totalcost'];

    $keynum = $_POST['keynum'];


    // $extension2 = substr($addressproof, strlen($addressproof) - 4, strlen($addressproof));
    // $allowed_extensions = array(".jpg", "jpeg", ".png", ".gif", ".pdf", ".PDF");
    // if (!in_array($extension1, $allowed_extensions)) {
    //   echo "<script>alert('Pics has Invalid format. Only jpg / jpeg/ png /gif /pdf format allowed.');</script>";
    // }
    // if(!in_array($extension2,$allowed_extensions))
    // {
    // echo "<script>alert('Pics has Invalid format. Only jpg / jpeg/ png /gif format allowed');</script>";
    // }

    // else {


    // $photo = md5($photo) . time() . $extension1;
    // $addressproof = md5($addressproof) . time() . $extension2;
    // move_uploaded_file($_FILES["photo"]["tmp_name"], "photo/" . $photo);
    $ret = mysqli_query($con, "select Email from tblassignlocker where LockerNumber='$lockernum' || KeyNumber='$keynum'");

    $result = mysqli_fetch_array($ret);
    if ($result > 0) {

      echo "<script>alert('This Locker Number or Key Number already associated with another account holder');</script>";
    } else {
      // move_uploaded_file($_FILES["addressproof"]["tmp_name"], "addressproof/" . $addressproof);
      $query = mysqli_query($con, "insert into tblassignlocker(FullName,Firm,Address,Email,MobileNumber,haircolor,eyecolor,height,weight,LockerSize,lockerprice1month,LockerNumber,expiredateofLocker,totalcostforrent,KeyNumber) values 
      ('$ahname','$firm','$comadd','$emailid','$mobilenumber','$haircolor','$eyecolor','$height','$weight','$lockersize',$lockerprice1month,'$lockernum','$expiredateofLocker','$totalcost','$keynum')");
      if ($query) {
        echo "<script>alert('Locker has been alloted successfully.');</script>";
        echo "<script type='text/javascript'> document.location = 'add-locker-form.php'; </script>";
      } else {
        echo "<script>alert('Something went wrong. Please try again.');</script>";
      }
    }
    // }
  }
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>STDS | Add Locker Type</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="../dist/css/adminlte.min.css">
    <!--Function Email Availabilty---->
    <script>
      function checkAvailability() {
        $("#loaderIcon").show();
        jQuery.ajax({
          url: "check_availability.php",
          data: 'username=' + $("#sadminusername").val(),
          type: "POST",
          success: function(data) {
            $("#user-availability-status").html(data);
            $("#loaderIcon").hide();
          },
          error: function() {}
        });
      }
    </script>

  </head>

  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
      <!-- Navbar -->
      <?php include_once("includes/navbar.php"); ?>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <?php include_once("includes/sidebar.php"); ?>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Add Locker Form</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="dashboard.php">Dashboard</a></li>
                  <li class="breadcrumb-item active">Add Locker Form</li>
                </ol>
              </div>
            </div>
          </div><!-- /.container-fluid -->
        </section>


        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <!-- left column -->
              <div class="col-md-8">
                <!-- general form elements -->
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Fill the Info of Account Holder</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form name="lockerform" method="post" enctype="multipart/form-data">
                    <div class="card-body">
                      <div class="form-group">
                        <label for="text">Full Name</label>
                        <input type="text" class="form-control" id="ahname" name="ahname" required>
                      </div>

                      <div class="form-group">
                        <label for="text">Firm</label>
                        <input type="text" class="form-control" id="firm" name="firm" required>
                      </div>

                      <div class="form-group">
                        <label for="text">Address</label>
                        <textarea class="form-control" name="comadd" required='true'></textarea>
                      </div>

                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Enter email" required>
                      </div>
                      <!-- Sub admin Contact Number---->
                      <div class="form-group">
                        <label for="text">Mobile Number</label>
                        <input type="text" class="form-control" id="mobilenumber" name="mobilenumber" placeholder="Enter Mobile Number" maxlength="10" pattern="[0-9]{10}" title="10 numeric characters only" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Hair color</label>
                        <input type="text" class="form-control" id="haircolor" name="haircolor" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Eye color</label>
                        <input type="text" class="form-control" id="eyecolor" name="eyecolor" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Height(cm)</label>
                        <input type="number" class="form-control" id="height" name="height" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Weight(kg)</label>
                        <input type="number" class="form-control" id="weight" name="weight" required>
                      </div>

                      <div class="form-group">
                        <label for="exampleInputEmail1">Type of Locker</label>
                        <select class="form-control" id="lockersize" name="lockersize">
                          <option>Choose Type of Locker(inch)</option>
                          <?php $query = mysqli_query($con, "select * from tbllockertype");
                          $cnt = 1;
                          while ($result = mysqli_fetch_array($query)) {
                          ?>
                            <option value="<?php echo $result['Priceoflocker'] ?>"><?php echo $result['SizeofLocker'] ?></option>

                            <!-- Priceoflocker -->
                            <!-- SizeofLocker -->
                          <?php } ?>
                        </select>
                      </div>


                      <div class="form-group">

                        <label for="text">Rent Duration(month)</label>
                        <input type="number" class="form-control" id="expiredate" name="expiredate" oninput="calculateTotalCost()" min="1">
                        <!-- <input type="number" class="form-control" id="expiredate" name="expiredate" onchange="updateTotal()" required> -->

                      </div>

                      <div class="form-group">
                        <label for="totalcost">Cost for Renting a box($USD/Month):</label>
                        <input type="number" class="form-control" id="onemonthcost" name="onemonthcost">
                      </div>


                      <div class="form-group">
                        <label for="totalcost">Total Cost for Renting($USD):</label>
                        <input type="number" class="form-control" id="totalcost" name="totalcost">
                      </div>


                      <div class="form-group">
                        <label for="text">Locker Number</label>
                        <input type="text" class="form-control" id="lockernum" name="lockernum" required>
                      </div>
                      <!-- <div class="form-group">
                        <label for="text">Expire Date of Vault</label>
                        <input type="date" class="form-control" id="expiredate" name="expiredate" required>
                      </div> -->


                      <div class="form-group">
                        <label for="text">Rent Box Key Number(minimum 4 digit)</label>
                        <input type="text" class="form-control" id="keynum" name="keynum" required>
                      </div>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary" name="submit" id="submit">Submit</button>
                </div>
                </form>
              </div>
              <!-- /.card -->



            </div>
            <!--/.col (left) -->

          </div>
          <!-- /.row -->
      </div><!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <?php include_once('includes/footer.php'); ?>


    </div>
    <!-- <script>
      const expireDate = new Date(new Date().setMonth(new Date().getMonth() + parseInt(document.getElementById('expiredate').value)));
    </script> -->
    <!-- ./wrapper -->
    <!-- <script src="../dist/js/form.js"></script> -->
    <!-- jQuery -->
    <script src=calculaterent.js></script>
    <script src="../plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- bs-custom-file-input -->
    <script src="../plugins/bs-custom-file-input/bs-custom-file-input.min.js"></script>
    <!-- AdminLTE App -->
    <script src="../dist/js/adminlte.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="../dist/js/demo.js"></script>
    <!-- Page specific script -->

    <script>
      $(function() {
        bsCustomFileInput.init();
      });
    </script>
  </body>

  </html>
<?php } ?>