
/**   show the status messages on the page load    **/
$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear status msges-------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// Form validation----------------
	var status = validateItemForm();
	// If not valid-------------------
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid----------------------
	var Connection = getConnectionCard($("#txtID").val().trim(),
		$('#txtName').val(),
		$("#ddlConnectivity").val());
	12
	$("#colConnections").append(Connection);
	$("#alertSuccess").text("Saved successfully.");
	$("#alertSuccess").show();
	$("#formConnection")[0].reset();
});
// REMOVE==========================================
$(document).on("click", ".remove", function(event) {
	$(this).closest(".Connection").remove();
	$("#alertSuccess").text("Removed successfully.");
	$("#alertSuccess").show();
});
// CLIENT-MODEL=================================================================
function validateItemForm() {
	// ID
	if ($("#txtID").val().trim() == "") {
		return "Insert Connection ID.";
	}
	// NAME
	if ($("#txtID").val().trim() == "") {
		return "Insert Connection Name.";
	}
	// Connectivity
	if ($("#ddlConnectivity").val() == "0") {
		return "Select Connectivity.";
	}
	return true;
}
function getConnectionCard(id, name, connectivity) {
	var connection = "";

	var ConnectivityNumber = "";
	switch (connectivity) {
		case "1":
			ConnectivityNumber = "connected";
			break;
		case "2":
			ConnectivityNumber = "disconnected";
			break;
	}
	var connection = "";
	connection += "<div class=\"connection card bg-light m-2\"style=\"max-width: 10rem; float: left;\">";
	connection += "<div class=\"card-body\">";
	connection +=  id + ",";
	connection += "<br>";
	connection +=  name + ",";
	connection += "<br>";
	connection += ConnectivityNumber + " connectivity";
	connection += "</div>";
	connection += "<input type=\"button\" value=\"Remove\"class=\"btn btn-danger remove\">";
	connection += "</div>";
	return Connection;
}