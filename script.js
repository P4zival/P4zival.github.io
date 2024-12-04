function viewDetails(workTitle) {
    alert(`You selected ${workTitle}. More details will be added soon!`);
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    alert(`Thank you for reaching out, ${name}! I'll reply to ${email} soon.`);
    this.reset();
  });
  