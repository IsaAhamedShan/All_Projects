<?php session_start();
// Database Connection
include('includes/config.php');
//Validating Session
if (strlen($_SESSION['aid']) == 0) {
  header('location:index.php');
} else {

  if (isset($_POST['update'])) {
    $ahname = $_POST['ahname'];
    // $firm = $_POST['firm'];
    $emailid = $_POST['emailid'];
    $mobilenumber = $_POST['mobilenumber'];
    $comadd = $_POST['comadd'];
    // $haircolor = $_POST['haircolor'];
    // $eyecolor = $_POST['eyecolor'];
    // $height = $_POST['height'];
    // $weight = $_POST['weight'];
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
    $extendexpiredate = $_POST['extendexpiredate'];
    // $extendexpiredate = date('Y-m-d', strtotime("+" . $extendexpiredate . " months"));

    // $expiredateofLocker = $expiredateofLocker + $extendexpiredate;
    // $expiredateofLocker = date('Y-m-d', strtotime($_POST['expiredate']));

    $expiredateofLocker = date('Y-m-d', strtotime($expiredateofLocker . ' +' . $extendexpiredate . ' month'));

    $totalextendcost = $_POST['totalextendcost'];
    $keynum = $_POST['keynum'];
    $lockerprice1month = $_POST['onemonthcost'];
    $ltid = intval($_GET['ltid']);
    $query = mysqli_query($con, "update tblassignlocker set FullName='$ahname',Email='$emailid',
    MobileNumber='$mobilenumber',Address='$comadd',expiredateofLocker='$expiredateofLocker' where ID='$ltid'");
    if ($query) {
      echo "<script>alert('Locker assign updated successfully.');</script>";
      echo "<script type='text/javascript'> document.location = 'manage-locker-form.php'; </script>";
    } else {
      echo "<script>alert('Something went wrong. Please try again.');</script>";
    }
  }
  if (isset($_POST['addrecord'])) {
    $ahname = $_POST['ahname'];

    $emailid = $_POST['emailid'];
    $mobilenumber = $_POST['mobilenumber'];
    $comadd = $_POST['comadd'];
    $lockernum = $_POST['lockernum'];
    $expiredateofLocker = $_POST['expiredate'];
    // $expiredateofLocker = date('Y-m-d', strtotime($expiredateofLocker . ' +' . $extendexpiredate . ' month'));
    $expiredateofLockerFORRECORDFORM = date('Y-m-d', strtotime($_POST['expiredate']));
    $keynum = $_POST['keynum'];

    $idcard = $_POST['idcard'];
    $signature = $_FILES["signature"]["name"];
    $extension1 = substr($signature, strlen($signature) - 4, strlen($signature));
    $userpicture = $_FILES["userpicture"]["name"];
    $extension2 = substr($userpicture, strlen($userpicture) - 4, strlen($userpicture));

    $signature = md5($signature) . time() . $extension1;
    $userpicture = md5($userpicture) . time() . $extension2;
    move_uploaded_file($_FILES["signature"]["tmp_name"], "signature/" . $signature);
    move_uploaded_file($_FILES["userpicture"]["tmp_name"], "userpicture/" . $userpicture);


    $ltid = intval($_GET['ltid']);
    $query = mysqli_query($con,  "insert into tblvisitlocker(LockerNumber,KeyNumber,FullName,Email,expiredateofLocker,signature,userpicture) values 
    ('$lockernum','$keynum','$ahname','$emailid','$expiredateofLockerFORRECORDFORM','$signature','$userpicture')");
    if ($query) {
      echo "<script>alert('Locker record added successfully.');</script>";
      echo "<script type='text/javascript'> document.location = 'manage-locker-form.php'; </script>";
    } else {
      echo "<script>alert('Something went wrong. Please try again.');</script>";
    }
  }
  if (isset($_POST['surrenderbox'])) {
    $ahname = $_POST['ahname'];
    $emailid = $_POST['emailid'];
    $mobilenumber = $_POST['mobilenumber'];
    $comadd = $_POST['comadd'];
    $lockernum = $_POST['lockernum'];
    $expiredateofLocker = $_POST['expiredate'];
    // $expiredateofLocker = date('Y-m-d', strtotime($expiredateofLocker . ' +' . $extendexpiredate . ' month'));
    $expiredateofLockerFORRECORDFORM = date('Y-m-d', strtotime($_POST['expiredate']));
    $keynum = $_POST['keynum'];

    // $idcard = $_POST['idcard'];
    $signature = $_FILES["signature"]["name"];
    $extension1 = substr($signature, strlen($signature) - 4, strlen($signature));
    // $userpicture = $_FILES["userpicture"]["name"];
    // $extension2 = substr($userpicture, strlen($userpicture) - 4, strlen($userpicture));

    $signature = md5($signature) . time() . $extension1;
    // $userpicture = md5($userpicture) . time() . $extension2;
    move_uploaded_file($_FILES["signature"]["tmp_name"], "signature/" . $signature);
    // move_uploaded_file($_FILES["userpicture"]["tmp_name"], "userpicture/" . $userpicture);


    $ltid = intval($_GET['ltid']);
    $query = mysqli_query($con,  "insert into tblreturnedboxlist(LockerNumber,KeyNumber,FullName,Email,signature) values 
    ('$lockernum','$keynum','$ahname','$emailid','$signature')");
    $query = mysqli_query($con,  "DELETE FROM tblassignlocker WHERE ID = $ltid");
    if ($query) {
      echo "<script>alert('Locker terminated successfully.');</script>";
      echo "<script type='text/javascript'> document.location = 'manage-locker-form.php'; </script>";
    } else {
      echo "<script>alert('Something went wrong. Please try again.');</script>";
    }
  }

?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>STDS| Edit/Update Banker admin</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="../dist/css/adminlte.min.css">
    <!--Function Email Availabilty---->


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
                <h1>Edit Customer Details</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="dashboard.php">Dashboard</a></li>
                  <li class="breadcrumb-item active">Edit Customer Details</li>
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
                    <h3 class="card-title">Update the Info</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
                  <form name="subadmin" method="post">
                    <?php
                    $ltid = intval($_GET['ltid']);
                    $query = mysqli_query($con, " select * from tblassignlocker where ID='$ltid'");
                    $cnt = 1;
                    while ($result = mysqli_fetch_array($query)) {
                    ?>
                      <div class="card-body">
                        <!-- Username-->
                        <div class="card-body">
                          <div class="card-body1">
                            <h3>Update Customer Info</h3>
                            <div class="form-group">
                              <label for="text">Full Name</label>
                              <input type="text" class="form-control" id="ahname" name="ahname" value="<?php echo $result['FullName'] ?>" required>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" id="emailid" value="<?php echo $result['Email'] ?>" name="emailid" required>
                            </div>
                            <!-- Sub admin Contact Number---->
                            <div class="form-group">
                              <label for="text">Mobile Number</label>
                              <input type="text" class="form-control" id="mobilenumber" name="mobilenumber" maxlength="10" pattern="[0-9]{10}" value="<?php echo $result['MobileNumber'] ?>" required>
                            </div>
                            <div class="form-group">
                              <label for="text">Address</label>
                              <textarea class="form-control" name="comadd" required='true'><?php echo $result['Address'] ?></textarea>
                            </div>
                            <div class="card-footer leftpadding0button">
                              <button type="submit" class="btn btn-primary" name="update" id="update">Update</button>
                            </div>
                          </div>
                        </div>


                        <div class="card-body2">
                          <form name="subadmin" method="post" class="extendRentDuration">
                            <h3>Extending Rent Duration</h3>
                            <div class="form-group">
                              <label for="text">Current Expire Date of Locker(m/d/y)</label>
                              <input type="date" class="form-control" id="expiredate" name="expiredate" value="<?php echo $result['expiredateofLocker'] ?>">
                              <!-- <input type="number" class="form-control" id="expiredate" name="expiredate" onchange="updateTotal()" required> -->
                            </div>
                            <div class="form-group">
                              <label for="text">Entend Rent Duration(Month)</label>
                              <input type="number" class="form-control" id="extendexpiredate" name="extendexpiredate" oninput="calculateTotalExtendCost()" min="1">
                              <!-- <input type="number" class="form-control" id="expiredate" name="expiredate" onchange="updateTotal()" required> -->
                            </div>
                            <div class="form-group">
                              <label for="totalextendcost">Total Cost for Extending($USD):</label>
                              <input type="number" class="form-control" id="totalextendcost" name="totalextendcost">
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Locker Size</label>
                              <textarea class="form-control" name="lockersize"><?php echo $result['LockerSize'] ?></textarea>
                            </div>
                            <div class="form-group">
                              <label for="totalextendcost">Cost for Renting a box($USD/Month):</label>
                              <input type="number" class="form-control" id="onemonthcost" value="<?php echo $result['lockerprice1month'] ?>" name="onemonthcost">
                            </div>
                            <div class="form-group">
                              <label for="text">Locker Number</label>
                              <input type="text" class="form-control" id="lockernum" value="<?php echo $result['LockerNumber'] ?>" name="lockernum" readonly='true'>
                            </div>
                            <div class="form-group">
                              <label for="text">Rent Box Key Number</label>
                              <input type="text" class="form-control" id="keynum" value="<?php echo $result['KeyNumber'] ?>" name="keynum" readonly='true'>
                            </div>
                            <div class="card-footer leftpadding0button">
                              <button type="submit" class="btn btn-primary" name="update" id="update">Extend</button>
                            </div>
                          </form>
                        </div>


                        <div class="card-body3">
                          <h3>Visit Rent Box Form</h3>
                          <!-- <div class="form-group">
                            <label for="text">ID Proof</label>
                            <select class="form-control" name="idcard">
                              <option value="">Choose ID Proof</option>
                              <option value="Aadhar Card">Birth Certificate</option>
                              <option value="Driving Licence">Driving Licence</option>
                              <option value="Voter Card">NID Card</option>
                            </select>
                          </div> -->
                          <div class="form-group">
                            <label for="text">User Image(pdf/jpeg/png/jpg)</label>
                            <input type="file" class="form-control" id="userpicture" name="userpicture">
                          </div>
                          <div class="form-group">
                            <label for="text">Signature Pic(pdf/jpeg/png/jpg)</label>
                            <input type="file" class="form-control" id="signature" name="signature">
                          </div>
                          <div class="card-footer leftpadding0button">
                            <button type="submit" class="btn btn-primary" name="addrecord" id="addrecord">Add Record</button>
                          </div>
                        </div>
                        <div class="card-body3">
                          <h3>Returing Safe Deposit Box</h3>
                          <div class="form-group">
                            <label for="text">Signature Pic(pdf/jpeg/png/jpg)</label>
                            <input type="file" class="form-control" id="signature" name="signature">
                          </div>
                          <div class="card-footer leftpadding0button">
                            <button type="submit" class="btn btn-primary" name="surrenderbox" id="surrenderbox">Surrender Box</button>
                          </div>
                        </div>

                      <?php } ?>
                      <!-- <div class="card-footer">
                        <button type="submit" class="btn btn-primary" name="update" id="update">Update</button>
                      </div> -->
                      <!-- <div class="card-footer">
                        <button type="submit" class="btn btn-primary" name="addrecord" id="addrecord">Add Record</button>
                      </div> -->
                  </form>
                </div>

              </div>
              <!-- /.card-body -->


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
    <!-- ./wrapper -->
    <script src=calculaterent.js></script>
    <!-- jQuery -->
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