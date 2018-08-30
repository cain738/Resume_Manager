var acad_array=[`<div class="card" id="academic-card">
         <div class="row">
             <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                 <h3>Academic Details</h3>
             </div>
             <div class="row">
                 <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                     <i class="fas fa-save" id="save-academic"></i>
                 </div>
             </div>
             <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                 <i class="fas fa-plus-square" id="add-academic"></i>
             </div>
         </div>
         <div class="card">
             <div class="row">
                 <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                     <h5>Card</h5>
                 </div>
             </div>
         <form>
             <div class="form-group">
                 <label for="degree-0">Degree/Course</label>
                 <input type="text" id="degree-0" class="form-control" placeholder="B.Tech/B.E">
             </div>
             <div class="form-group">
                 <label for="institute-name-0">Institution</label>
                 <input type="text" id="institute-name-0" class="form-control">
             </div>
             <div class="row">
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="type-marks-0" id="percentage" value="Percentage">
                         <label class="form-check-label" for="percentage">Percentage</label>
                     </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="type-marks-0" id="cgpa" value="CGPA">
                         <label class="form-check-label" for="cgpa">CGPA</label>
                     </div>
                 </div>
             </div>

             <div class="form-group">
                 <label for="institute-marks-0">Marks</label>
                 <input type="number" id="institute-marks-0" class="form-control">
             </div>
             <div class="row">
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="duration-course-0" id="pursuing" value="Pursuing">
                         <label class="form-check-label" for="pursuing">Pursuing</label>
                     </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="duration-course-0" id="graduated" value="Graduated">
                         <label class="form-check-label" for="graduated">Graduated</label>
                     </div>
                 </div>
             </div>
         </form>
         </div>
`];
let acad_object={};
let i=acad_array.indexOf(`<div class="card" id="academic-card">
         <div class="row">
             <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                 <h3>Academic Details</h3>
             </div>
             <div class="row">
                 <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                     <i class="fas fa-save" id="save-academic"></i>
                 </div>
             </div>
             <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                 <i class="fas fa-plus-square" id="add-academic"></i>
             </div>
         </div>
         <div class="card">
             <div class="row">
                 <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                     <h5>Card</h5>
                 </div>
             </div>
         <form>
             <div class="form-group">
                 <label for="degree-0">Degree/Course</label>
                 <input type="text" id="degree-0" class="form-control" placeholder="B.Tech/B.E">
             </div>
             <div class="form-group">
                 <label for="institute-name-0">Institution</label>
                 <input type="text" id="institute-name-0" class="form-control">
             </div>
             <div class="row">
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="type-marks-0" id="percentage" value="Percentage">
                         <label class="form-check-label" for="percentage">Percentage</label>
                     </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="type-marks-0" id="cgpa" value="CGPA">
                         <label class="form-check-label" for="cgpa">CGPA</label>
                     </div>
                 </div>
             </div>

             <div class="form-group">
                 <label for="institute-marks-0">Marks</label>
                 <input type="number" id="institute-marks-0" class="form-control">
             </div>
             <div class="row">
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="duration-course-0" id="pursuing" value="Pursuing">
                         <label class="form-check-label" for="pursuing">Pursuing</label>
                     </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-12">
                     <div class="form-check form-check-inline">
                         <input class="form-check-input" type="radio" name="duration-course-0" id="graduated" value="Graduated">
                         <label class="form-check-label" for="graduated">Graduated</label>
                     </div>
                 </div>
             </div>
         </form>
         </div>
`)+1;
$(document).ready(function () {
   let add_academic=$('#add-academic');
   let acad_card=$('#academic-card');

add_academic.click(function () {

    let value=`<div class="card">
                        <div class="row">
                            <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                                <h5>Card.${i}</h5>
                            </div>
                            <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                                <a class="material-icons" id="delete-this-academic" value="${i}" onclick="delete_item(this,${i})">delete</a>
                            </div>
                        </div>
                    <form>
                        <div class="form-group">
                            <label for="degree-${i}">Degree/Course</label>
                            <input type="text" id="degree-${i}" class="form-control" placeholder="B.Tech/B.E">
                        </div>
                        <div class="form-group">
                            <label for="institute-name${i}">Institution</label>
                            <input type="text" id="institute-name-${i}" class="form-control">
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="type-marks-${i}" id="percentage" value="Percentage">
                                    <label class="form-check-label" for="percentage">Percentage</label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="type-marks-${i}" id="cgpa" value="CGPA">
                                    <label class="form-check-label" for="cgpa">CGPA</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="institute-marks-${i}">Marks</label>
                            <input type="number" id="institute-marks-${i}" class="form-control">
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="duration-course-${i}" id="pursuing" value="Pursuing">
                                    <label class="form-check-label" for="pursuing">Pursuing</label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="duration-course-${i}" id="graduated" value="Graduated">
                                    <label class="form-check-label" for="graduated">Graduated</label>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>`;
        i++;
        acad_array[acad_array.length]=value;
        acad_card.append(acad_array[acad_array.length-1]);
        console.log(acad_array)
        //console.log(acad_array.length+ "array length");
        //console.log(acad_array[acad_array.length-1])


    });
$('#save-academic').click(function(){
  let acad_details=[];
  for(let c=0;c<i;c++)
  {
    acad_details[c]=Object.create(acad_object);


    if(document.getElementById(`degree-${c}`)!=null)
    {
    acad_details[c].degree=document.getElementById(`degree-${c}`).value;
    }
    else {
      {
        acad_details[c].degree="null";
      }
    }



    if(document.getElementById(`institute-name-${c}`)!=null)
    {
    acad_details[c].institute_name=document.getElementById(`institute-name-${c}`).value;
    }
    else {
      {
        acad_details[c].institute_name="null";
      }
    }



    if($(`input[name='type-marks-${c}']:checked`)!=null)
    {
    acad_details[c].type_marks=$(`input[name='type-marks-${c}']:checked`).val();
    }
    else {
      {
        acad_details[c].type_marks="null";
      }
    }


    if(document.getElementById(`institute-marks-${c}`)!=null)
    {
    acad_details[c].marks=document.getElementById(`institute-marks-${c}`).value;
    }
    else {
      {
        acad_details[c].marks="null";
      }
    }


    if($(`input[name='duration-course-${c}']:checked`)!=null)
    {
    acad_details[c].course_dur=$(`input[name='duration-course-${c}']:checked`).val();
    }
    else {
      {
        acad_details[c].course_dur="null";
      }
    }

  }







  console.log(acad_details);
})
});
function delete_item(el,i) {
let rem=$(el).parent().parent().parent();
acad_array.slice(i,1);
rem.remove();
//console.log(acad_array);

    //console.log(i);
}
