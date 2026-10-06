function order(product){
  const phone="6281234567890";
  const text=`Halo kak, saya mau pesan ${product}. Bisa info ketersediaan dan total harganya?`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank");
}