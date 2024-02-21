<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Connection Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/main.js"></script>

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<h1 class="m-3">Connection details</h1>
				<form id="formConnection">

					<!-- Connection ID -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Connection Name: </span>
						</div>
						<input type="text" id="txtID" name="txtID">
					</div>
					
					<!-- Connection NAME -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Connection Name: </span>
						</div>
						<input type="text" id="txtName" name="txtName">
					</div>
					
					<!-- Connectivity -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Connectivity: </span>
						</div>
						<select id="ddlConnectivity" name="ddlConnectivity">
							<option value="0">--Select Connectivity--</option>
							<option value="1">Connected</option>
							<option value="2">Disconnected</option>
						</select>
					</div>
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<input type="button" id="btnSave" value="Save"
						class="btn btn-primary">
				</form>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-12" id="colConnections"></div>
		</div>
	</div>
</body>
</html>