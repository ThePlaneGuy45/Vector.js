/* Vector2 Class ***********************/

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    /* Swizzeling *******/
    get xx() { return new Vector2(this.x, this.x); }
    get xy() { return new Vector2(this.x, this.y); }
    get yx() { return new Vector2(this.y, this.x); }
    get yy() { return new Vector2(this.y, this.y); }
    get xxx() { return new Vector3(this.x, this.x, this.x); }
    get xxy() { return new Vector3(this.x, this.x, this.y); }
    get xyx() { return new Vector3(this.x, this.y, this.x); }
    get xyy() { return new Vector3(this.x, this.y, this.y); }
    get yxx() { return new Vector3(this.y, this.x, this.x); }
    get yxy() { return new Vector3(this.y, this.x, this.y); }
    get yyx() { return new Vector3(this.y, this.y, this.x); }
    get yyy() { return new Vector3(this.y, this.y, this.y); }

    /* Math Functions *******/
    add(b) { this.x += b.x; this.y += b.y; return this; }
    sub(b) { this.x -= b.x; this.y -=b.y; return this; }
    subtract(b) { return this.sub(b); }
    scale(b) { this.x *= b; this.y *= b; return this; }
    mul(b) { this.x *= b.x; this.y *= b.y; return this; }
    multiply(b) { return this.mul(b); }
    div(b) { this.x /= b.x; this.y /= b.y; return this; }
    divide(b) { return this.div(b); }
    exp(b) { this.x **= b.x; this.y **= b.y; return this; }
    pow(b) { return this.exp(b); }
    len() { return Math.sqrt( this.x * this.x + this.y * this.y ); }
    length() { return this.len(); }
    dist(b) { return this.sub(b).len(); }
    distance(b) { return this.distance(b); }
    norm() { let l = this.len(); return this.div(new Vector2(l, l)); }
    normalize() { return this.norm(); }
    dot(b) { return this.x * b.x + this.y * b.y; }
    lerp(b, t) { return this.add(b.sub(this).scale(t)); }
    interpolate(b, t) { return this.lerp(b, t); }

    /* Non-Math Functions *******/
    toArray() { return [this.x, this.y]; }
    toString() { return ("(" + this.x + ", " + this.y + ")"); }
    set(x, y) { this.x = x; this.y = y; }
}
vector2 = Vector2; // Aliases
Vec2 = Vector2;
vec2 = Vector2;

/* Vector3 Class ***********************/

class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /* Swizzeling *******/
    get xx() { return new Vector2(this.x, this.x); }
    get xy() { return new Vector2(this.x, this.y); }
    get xz() { return new Vector2(this.x, this.z); }
    get yx() { return new Vector2(this.y, this.x); }
    get yy() { return new Vector2(this.y, this.y); }
    get yz() { return new Vector2(this.y, this.z); }
    get zx() { return new Vector2(this.z, this.x); }
    get zy() { return new Vector2(this.z, this.y); }
    get zz() { return new Vector2(this.z, this.z); }
    get xxx() { return new Vector3(this.x, this.x, this.x); }
    get xxy() { return new Vector3(this.x, this.x, this.y); }
    get xxz() { return new Vector3(this.x, this.x, this.z); }
    get xyx() { return new Vector3(this.x, this.y, this.x); }
    get xyy() { return new Vector3(this.x, this.y, this.y); }
    get xyz() { return new Vector3(this.x, this.y, this.z); }
    get xzx() { return new Vector3(this.x, this.z, this.x); }
    get xzy() { return new Vector3(this.x, this.z, this.y); }
    get xzz() { return new Vector3(this.x, this.z, this.z); }
    get yyx() { return new Vector3(this.y, this.y, this.x); }
    get yyy() { return new Vector3(this.y, this.y, this.y); }
    get yyz() { return new Vector3(this.y, this.y, this.z); }
    get yxx() { return new Vector3(this.y, this.x, this.x); }
    get yxy() { return new Vector3(this.y, this.x, this.y); }
    get yxz() { return new Vector3(this.y, this.x, this.z); }
    get yzx() { return new Vector3(this.y, this.z, this.x); }
    get yzy() { return new Vector3(this.y, this.z, this.y); }
    get yzz() { return new Vector3(this.y, this.z, this.z); }
    get zxx() { return new Vector3(this.z, this.x, this.x); }
    get zxy() { return new Vector3(this.z, this.x, this.y); }
    get zxz() { return new Vector3(this.z, this.x, this.z); }
    get zyx() { return new Vector3(this.z, this.y, this.x); }
    get zyy() { return new Vector3(this.z, this.y, this.y); }
    get zyz() { return new Vector3(this.z, this.y, this.z); }
    get zzx() { return new Vector3(this.z, this.z, this.x); }
    get zzy() { return new Vector3(this.z, this.z, this.y); }
    get zzz() { return new Vector3(this.z, this.z, this.z); }

    /* Math Functions *******/
    add(b) { this.x += b.x; this.y += b.y; this.z +=b.z; return this; }
    sub(b) { this.x -= b.x; this.y -=b.y; this.z -=b.z; return this; }
    subtract(b) { return this.sub(b); }
    scale(b) { this.x *= b; this.y *= b; this.z *=b; return this; }
    mul(b) { this.x *= b.x; this.y *= b.y; this.z *=b.z; return this; }
    multiply(b) { return this.mul(b); }
    div(b) { this.x /= b.x; this.y /= b.y; this.z /=b.z; return this; }
    divide(b) { return this.div(b); }
    exp(b) { this.x **= b.x; this.y **= b.y; this.z **=b.z; return this; }
    pow(b) { return this.exp(b); }
    len() { return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z ); }
    length() { return this.len(); }
    dist(b) { return this.sub(b).len(); }
    distance(b) { return this.distance(b); }
    norm() { let l = this.len(); return this.div(new Vector3(l, l, l)); }
    normalize() { return this.norm(); }
    dot(b) { return this.x * b.x + this.y * b.y + this.z * b.z; }
    lerp(b, t) { return this.add(b.sub(this).scale(t)); }
    interpolate(b, t) { return this.lerp(b, t); }
    cross(b) { this.x = this.y * b.z - this.z * b.y; this.y = this.z * b.x - this.x * b.z; this.z = this.x * b.y - this.y * b.x; return this; }
    reflect(b) { let p = 2 * this.dot(b); return this.sub(b.scale(p)); }

    /* Non-Math Functions *******/
    toArray() { return [this.x, this.y, this.z]; }
    toString() { return ("(" + this.x + ", " + this.y + ", " + this.z + ")"); }
    set(x, y, z) { this.x = x; this.y = y; this.z = z; }
}
vector3 = Vector3; // Aliases
Vec3 = Vector3;
vec3 = Vector3;

/* Array Functions */
Array.prototype.toVector = function() { if (this.length == 2) { return new Vector2( this[0], this[1] ); } else if (this.length == 3) { return new Vector3( this[0], this[1], this[2] ); } else { console.error("Invalid Array Length"); return(0); } }