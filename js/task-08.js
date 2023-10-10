// function submitForm(event) {
//     event.preventDefault();
//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];
//         if (element.type !== 'submit') {
//           formData[element.name] = element.value;
//         }
//       }
//       if (!formData.email || !formData.password) {
//         alert('Всі поля повинні бути заповнені');
//       } else {
//         console.log(formData);
//         form.reset();
//       }
//     }

    

    document.querySelector('.login-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
  
      if (!email || !password) {
          alert('Всі поля повинні бути заповнені');
          return;
      }
  
      const formData = {
          email: email,
          password: password
      };
  
      console.log(formData);
  
      event.target.reset(); 
  });




