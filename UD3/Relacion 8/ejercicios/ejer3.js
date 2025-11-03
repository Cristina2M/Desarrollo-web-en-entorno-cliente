// Función constructora Punto(x, y)
export function Punto(x, y) {
  this.x = Number(x);
  this.y = Number(y);
}

// Función constructora Recta(p1, p2)
export function Recta(p1, p2) {
  if (!p1 || !p2) throw new Error('Recta requiere dos puntos');
  this.p1 = p1;
  this.p2 = p2;

  this.longitud = function () {
    const dx = this.p2.x - this.p1.x;
    const dy = this.p2.y - this.p1.y;
    return Math.hypot(dx, dy);
  };

  this.pendiente = function () {
    const dx = this.p2.x - this.p1.x;
    if (dx === 0) return Infinity;
    return (this.p2.y - this.p1.y) / dx;
  };
}

export function showLongitudYPendiente() {
  const a = new Punto(0, 0);
  const b = new Punto(3, 4);
  const r = new Recta(a, b);
  console.log(`Recta AB longitud: ${r.longitud()}`); // 5
  console.log(`Recta AB pendiente: ${r.pendiente()}`); // 4/3
}


