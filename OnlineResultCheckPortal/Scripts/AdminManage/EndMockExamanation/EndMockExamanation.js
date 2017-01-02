﻿$(document).ready(function () {
    EndExaminationsDetails();
    $('[data-toggle="tooltip"]').tooltip();
});

//This function use to Get User list..
function EndExaminationsDetails() {
    $.ajax({
        type: "POST",
        url: '/EndOfTermExaminations/GetDetailsEndMockExaminations',
        type: 'GET',
        dataType: "json",
        success: function (d) {
            var oTable = $('#EndofTermMockExamresultTable').dataTable();
            oTable.fnClearTable();
            //  var obj = jQuery.parseJSON(msg);
            if (d.length > 0) {
                for (var i = 0; i < d.length; i++) {
                    // console.log("row:" + JSCEID);
                    $('#EndofTermMockExamresultTable').dataTable().fnAddData([
                    d[i].RowNumber, d[i].RegistrationNumber, d[i].FullName, d[i].Description, "<a href='#' data-toggle='tooltip' data-placement='top' title='Download file' style='margin-left:20px; margin-top: 11px;' onclick='DownloadResult(" + d[i].RegistrationNumber + ")' class='btn btn-info'> <span class='glyphicon glyphicon-download'></span> Result Downlolad</a>", "<a href='#'  data-placement='top' title='Edit'  data-toggle='modal' data-target='#myStudentProfile' onclick='EndMockExamResultEdit(" + d[i].ID + ")' class='glyphicon glyphicon-edit'/></a>&nbsp;|&nbsp;<a  href='#' data-toggle='tooltip' data-placement='top' title='Delete' onclick='DeleteMockExamResult(" + d[i].ID + ")'class='glyphicon glyphicon-trash' alt='Mountain View' style='width:15px;height:18px;margin-left:2px;color: red;'></a>"

                    ]);

                };
            }
            else {

            }
        }
    });

}


function DownloadResult(RegistrationId) {
    //alert('d' + RegistrationId);
    $.ajax({
        type: 'post',
        url: '/EndOfTermExaminations/ResultDownloadFile',
        data: { 'RegistrationId': RegistrationId },
        dataType: 'json',
        success: function (returnValue) {

            window.location = '/EndOfTermExaminations/DownloadFile?file=' + returnValue;
        }
    });

};

function UploadUserProfileImage(UserId) {
    // var Id = Id;
    if (window.FormData !== undefined) {

        var fileUpload = $("#FileUpload").get(0);

        var files = fileUpload.files;
        if (fileUpload.files.length > 0) {
            // Create FormData object  
            var fileData = new FormData();

            // Looping over all files and add it to FormData object  
            for (var i = 0; i < files.length; i++) {

                fileData.append(files[i].name, files[i]);
            }

            // Adding one more key to FormData object  
            fileData.append('UserId', UserId);

            $.ajax({
                url: '/EndOfTermExaminations/UploadEndofTermMockExamExcelSheet?id' + UserId,
                type: "POST",
                contentType: false, // Not to set any content header  
                processData: false, // Not to process data  
                // data: JSON.stringify(request),
                data: fileData,
                success: function (d) {
                    EndExaminationsDetails();
                    $("#lblMessages").show();
                    $("#lblMessages").html(d);
                    setTimeout(function () { $("#lblMessages").hide(); }, 10000);

                    $('#AddNewManageJSCEResult').bootstrapValidator('resetForm', true);
                    $("#img").attr('src', '/UploadFiles/' + response);

                },
                error: function (err) {

                }
            });

        }
        else {
            //  alert("FormData is not supported.");
        }
    }
}





function EndMockExamResultEdit(Id) {
    //alert("test");
    $.ajax({
        url: '/EndOfTermExaminations/GetEditEndMockExamanation',
        dataType: 'json',
        type: "POST",
        data: { 'Id': Id },
        success: function (data) {
            console.log(data)
            if (data.length > 0) {
                $.each(data, function (i, row) {
                    //$("#ddlJSCEID").attr("disabled", "disabled");
                    if ('English Language' == row.SubjectName) {
                        $('#txtGradeEnglish').val(row.Grade);
                        $('#txtRemarksEnglish').val(row.Remarks);
                    }
                    if ('Mathematics' == row.SubjectName) {
                        $('#txtGradeMathematics').val(row.Grade);
                        $('#txtRemarksMathematics').val(row.Remarks);
                    }
                    if ('Integrated science' == row.SubjectName) {
                        $('#txtGradeIntegratedScience').val(row.Grade);
                        $('#txtRemarksIntegratedScience').val(row.Remarks);
                    }
                    if ('Social Studies' == row.SubjectName) {
                        $('#txtGradeSocialStudies').val(row.Grade);
                        $('#txtRemarksSocialStudies').val(row.Remarks);
                    }
                    if ('Religious Studies' == row.SubjectName) {
                        $('#txtGradeReligiousStudies').val(row.Grade);
                        $('#txtRemarksReligiousStudies').val(row.Remarks);
                    }
                    if ('Hausa Yourba/lgbo' == row.SubjectName) {
                        $('#txtGradeHausaYourba').val(row.Grade);
                        $('#txtRemarksHausaYourba').val(row.Remarks);
                    }
                    if ('Intro Technology' == row.SubjectName) {
                        $('#txtGradeIntroTechnology').val(row.Grade);
                        $('#txtRemarksIntroTechnology').val(row.Remarks);
                    }
                    if ('Business Studies' == row.SubjectName) {

                        $('#txtGradeBusinessStudies').val(row.Grade);
                        $('#txtRemarksBusinessStudies').val(row.Remarks);
                    }
                    if ('Intro Ptactical Agric' == row.SubjectName) {
                        $('#txtGradeIntroPtacticalAgric').val(row.Grade);
                        $('#txtRemarksIntroPtacticalAgric').val(row.Remarks);
                    }
                    if ('Home Economics' == row.SubjectName) {
                        $('#txtGradeHomeEconomics').val(row.Grade);
                        $('#txtRemarksHomeEconomics').val(row.Remarks);
                    }
                    if ('Fine Arts' == row.SubjectName) {
                        $('#txtGradeFineArts').val(row.Grade);
                        $('#txtRemarksFineArts').val(row.Remarks);
                    }
                    if ('P.H.E:' == row.SubjectName) {
                        $('#txtGradePHE').val(row.Grade);
                        $('#txtRemarksPHE').val(row.Remarks);
                    }
                    if ('Arabic Studies French' == row.SubjectName) {

                        $('#txtGradeArabicStudiesFrench').val(row.Grade);
                        $('#txtRemarksArabicStudiesFrench').val(row.Remarks);

                    }
                    $('#RegistrationNumber').val(row.RegistrationNumber);
                    $('#FirstName').val(row.StudentID);
                    $('#txtDescription').val(row.Description);
                    $('#UpdateID').val(row.ID);
                });

            }
        },
    });
}
function DeleteMockExamResult(Id) {
    if (confirm("Are you sure you want to delete Record?")) {
        $.ajax({
            url: '/EndOfTermExaminations/DeleteEndMockExamanation',
            dataType: 'json',
            type: "GET",
            data: { 'Id': Id },
            success: function (d) {

                EndExaminationsDetails();
                $("#lblMessage").show();
                $('#lblMessage').html(d);
                setTimeout(function () { $("#lblMessage").hide(); }, 5000);
            },
        });
    }
}


function InsertEndofTermMockExamResult(controller) {

    var Result = [

          {
              ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblEnglish').text(), Grade: $('#txtGradeEnglish').val(), Remarks: $('#txtRemarksEnglish').val(), Description: $('#txtDescription').val()
          },
         {
             ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblMath').text(), Grade: $('#txtGradeMathematics').val(), Remarks: $('#txtRemarksMathematics').val()
         },
          {
              ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblIntegratedScience').text(), Grade: $('#txtGradeIntegratedScience').val(), Remarks: $('#txtRemarksIntegratedScience').val()
          },
           {
               ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblSocialStudies').text(), Grade: $('#txtGradeSocialStudies').val(), Remarks: $('#txtRemarksSocialStudies').val()
           },
             {
                 ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblReligious').text(), Grade: $('#txtGradeReligiousStudies').val(), Remarks: $('#txtRemarksReligiousStudies').val()
             },
         {
             ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblHausa').text(), Grade: $('#txtGradeHausaYourba').val(), Remarks: $('#txtRemarksHausaYourba').val()
         },
          {
              ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblIntroTechnology').text(), Grade: $('#txtGradeIntroTechnology').val(), Remarks: $('#txtRemarksIntroTechnology').val()
          },
           {
               ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblBusiness').text(), Grade: $('#txtGradeBusinessStudies').val(), Remarks: $('#txtRemarksBusinessStudies').val()
           },
            {
                ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblIntroPtactical').text(), Grade: $('#txtGradeIntroPtacticalAgric').val(), Remarks: $('#txtRemarksIntroPtacticalAgric').val()
            },
             {
                 ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblHomeEconomics').text(), Grade: $('#txtGradeHomeEconomics').val(), Remarks: $('#txtRemarksHomeEconomics').val()
             },
              {
                  ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblFineArts').text(), Grade: $('#txtGradeFineArts').val(), Remarks: $('#txtRemarksFineArts').val()
              },
               {
                   ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblPhe').text(), Grade: $('#txtGradePHE').val(), Remarks: $('#txtRemarksPHE').val()
               },
                 {
                     ID: $('#FirstName').val(), UpdateID: $('#UpdateID').val(), RegistrationNumber: $('#RegistrationNumber').val(), SubjectName: $('#lblArabicStudies').text(), Grade: $('#txtGradeArabicStudiesFrench').val(), Remarks: $('#txtRemarksArabicStudiesFrench').val()
                 }
    ];

    //var  ResultUpload = JSON.stringify({ 'Result': Result });

    $.ajax({
        url: controller,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: "POST",
        data: JSON.stringify(Result),
        success: function (d) {
            if (d == "Registration no already exists !") {

                $("#lblMessage").show();
                $("#lblMessage").html("Registration no already exists !");
                setTimeout(function () { $("#lblMessage").hide(); }, 10000);
                $('#myStudentProfile').modal('toggle'); //or  $('#IDModal').modal('hide');
                return false;
            }
            else {

                UploadUserProfileImage(d)
                $('#AddNewManageJSCEResult').bootstrapValidator('resetForm', true);
                $("#lblMessages").show();
                $("#lblMessages").html(d);
                setTimeout(function () { $("#lblMessages").hide(); }, 10000);
                $('#myStudentProfile').modal('toggle'); //or  $('#IDModal').modal('hide');
                return false;

                EndExaminationsDetails();
            }

        }
    });
};
