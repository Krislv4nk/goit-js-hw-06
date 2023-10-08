function submitForm(event) {
    event.preventDefault();
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.type !== 'submit') {
          formData[element.name] = element.value;
        }
      }
      if (!formData.email || !formData.password) {
        alert('Всі поля повинні бути заповнені');
      } else {
        console.log(formData);
        form.reset();
      }
    }








