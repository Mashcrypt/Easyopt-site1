body {
  font-family: Poppins, sans-serif;
  background: #f4f6fb;
  margin: 0;
}

.dash-header {
  background: linear-gradient(90deg,#1e3a8a,#2563eb);
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 20px;
  padding: 30px;
}

.stat-card {
  background: white;
  padding: 22px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
  text-align: center;
  animation: fadeUp .6s ease;
}

.stat-card span {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1e3a8a;
}

.pricing-section {
  padding: 50px 20px;
  text-align: center;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 24px;
  max-width: 1100px;
  margin: auto;
}

.price-card {
  background: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,.08);
  transition: transform .3s ease;
}

.price-card:hover {
  transform: translateY(-8px);
}

.price-card.highlight {
  border: 3px solid #facc15;
}

.price-card.premium {
  background: linear-gradient(180deg,#1e3a8a,#2563eb);
  color: white;
}

.price {
  font-size: 2.4rem;
  font-weight: 800;
}

button {
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #16a34a;
  color: white;
  font-weight: 700;
}

.analytics {
  max-width: 900px;
  margin: 50px auto;
  background: white;
  padding: 30px;
  border-radius: 16px;
}

@keyframes fadeUp {
  from {opacity:0; transform:translateY(20px);}
  to {opacity:1; transform:translateY(0);}
}
