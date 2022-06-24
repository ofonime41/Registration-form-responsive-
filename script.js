formi= document.getElementById('form');
fname=document.getElementById('fname');
lname=document.getElementById('lname');
email=document.getElementById('email');
password=document.getElementById('password');


formi.addEventListener('submit', (e) =>{
    //prevent default submit
    e.preventDefault();

    //call check input function
    checkInputs()

});
   

function checkInputs(){
    const firstName=fname.value.trim();
    const lastName=lname.value.trim();
    const userEmail=email.value.trim();
    const userPassword=password.value.trim();


    //VALIDATE INPUT
    if(firstName===''){
        setErrorFor(fname, 'First Name cannot be empty')
    } else{
         setSuccessFor(fname)

    };

    if(lastName===''){
        setErrorFor(lname, 'Last Name cannot be empty')
    } else{
         setSuccessFor(lname)

    };

    if(userEmail===''){
        setErrorFor(email, 'Looks like this is not an email')
    } else{
         setSuccessFor(email)

    };

    if(userPassword===''){
        setErrorFor(password, 'Password Cannot be blank')
    } else{
         setSuccessFor(password)

    };
   
   
    
};

function setErrorFor(input, message){
    const formGroup=input.parentElement;
    const small=formGroup.querySelector('small');

    //Add error message
    small.innerText=message;

    // ADD THE ERROR CLASS
    formGroup.className='form-group error';



}

function setSuccessFor(input){
    const formGroup=input.parentElement;
    formGroup.className='form-group success';
}