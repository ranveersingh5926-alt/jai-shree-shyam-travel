function sendWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const phone=document.getElementById('phone').value;
  const destination=document.getElementById('destination').value;
  const people=document.getElementById('people').value || 'Not specified';
  const date=document.getElementById('traveldate').value || 'Not specified';
  const message=document.getElementById('message').value || 'No extra details';
  const text=`Hello Jai Shree Shyam Tour and Travel Service,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ADestination: ${encodeURIComponent(destination)}%0ATravellers: ${encodeURIComponent(people)}%0ATravel date: ${encodeURIComponent(date)}%0ADetails: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/918104148505?text=${text}`,'_blank');
}