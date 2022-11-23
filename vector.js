/* Vector Defining *****************************************************/

const Vector2 = function(x, y){
    this.x = x;
    this.y = y;
}
const vector2 = Vector2;
const Vec2 = Vector2;
const vec2 = Vector2;

const Vector3 = function(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
};
const vector3 = Vector3;
const Vec3 = Vector3;
const vec3 = Vector3;

/* Vec2 Swizzling *****************************************************/

Vector2.prototype.xx = function() { new Vector2(this.x, this.x); }
Vector2.prototype.xy = function() { new Vector2(this.x, this.y); }
Vector2.prototype.yx = function() { new Vector2(this.y, this.x); }
Vector2.prototype.yy = function() { new Vector2(this.y, this.y); }
Vector2.prototype.xxx = function() { return new Vector3(this.x, this.x, this.x); }
Vector2.prototype.xxy = function() { return new Vector3(this.x, this.x, this.y); }
Vector2.prototype.xyx = function() { return new Vector3(this.x, this.y, this.x); }
Vector2.prototype.xyy = function() { return new Vector3(this.x, this.y, this.y); }
Vector2.prototype.yxx = function() { return new Vector3(this.y, this.x, this.x); }
Vector2.prototype.yxy = function() { return new Vector3(this.y, this.x, this.y); }
Vector2.prototype.yyx = function() { return new Vector3(this.y, this.y, this.x); }
Vector2.prototype.yyy = function() { return new Vector3(this.y, this.y, this.y); }

/* Vector2 Math *****************************************************/

Vector2.prototype.add = function(b) {
    return new Vector2(x + b.x, y + b.y);
}

Vector2.prototype.sub = function(b) {
    return new Vector2(x - b.x, y - b.y);
}
Vector2.prototype.subtract = Vector2.prototype.sub;

Vector2.prototype.scale = function(b) {
    return new Vector2(x * b, y * b);
}

Vector2.prototype.mul = function(b) {
    return new Vector2(x * b.x, y * b.y);
}
Vector2.prototype.multiply = Vector2.prototype.mul;

Vector2.prototype.div = function(b) {
    return new Vector2(x / b.x, y / b.y);
}
Vector2.prototype.divide = Vector2.prototype.div;

Vector2.prototype.len = function() {
    return Math.sqrt(x * x + y * y);
}
Vector2.prototype.length = Vector2.prototype.len;

Vector2.prototype.dist = function(b) {
    return this.sub(b).len;
}
Vector2.prototype.distance = Vector2.prototype.dist;

Vector2.prototype.norm = function() {
    let l = new Vector2(x, y).len();
    return new Vector2(x / l, y / l);
}
Vector2.prototype.normalize = Vector2.prototype.norm;

Vector2.prototype.dot = function(b) {
    return x * b.x + y * b.y;
}

Vector2.prototype.lerp = function(b, t) {
    return new Vector2(
        x + (b.x - x) * t,
        y + (b.y - y) * t
    )
}
Vector2.prototype.interpolate = Vector2.prototype.lerp;

/* Vec2 Non-math Functions *****************************************************/

Vector2.prototype.toArray = function() {
    return [this.x, this.y];
}

Vector2.prototype.toString = function() {
    return ("(" + this.x + ", " + this.y + ")");
}

Vector2.prototype.set = function(x, y) {
    return new Vector2(x, y);
}

/* Vec3 Swizzling *****************************************************/

Vector3.prototype.xx = function() { return new Vector2(this.x, this.x); }
Vector3.prototype.xy = function() { return new Vector2(this.x, this.y); }
Vector3.prototype.xz = function() { return new Vector2(this.x, this.z); }
Vector3.prototype.yx = function() { return new Vector2(this.y, this.x); }
Vector3.prototype.yy = function() { return new Vector2(this.y, this.y); }
Vector3.prototype.yz = function() { return new Vector2(this.y, this.z); }
Vector3.prototype.zx = function() { return new Vector2(this.z, this.x); }
Vector3.prototype.zy = function() { return new Vector2(this.z, this.y); }
Vector3.prototype.zz = function() { return new Vector2(this.z, this.z); }
Vector3.prototype.xxx = function() { return new Vector3(this.x, this.x, this.x); }
Vector3.prototype.xxy = function() { return new Vector3(this.x, this.x, this.y); }
Vector3.prototype.xxz = function() { return new Vector3(this.x, this.x, this.z); }
Vector3.prototype.xyx = function() { return new Vector3(this.x, this.y, this.x); }
Vector3.prototype.xyy = function() { return new Vector3(this.x, this.y, this.y); }
Vector3.prototype.xyz = function() { return new Vector3(this.x, this.y, this.z); }
Vector3.prototype.xzx = function() { return new Vector3(this.x, this.z, this.x); }
Vector3.prototype.xzy = function() { return new Vector3(this.x, this.z, this.y); }
Vector3.prototype.xzz = function() { return new Vector3(this.x, this.z, this.z); }
Vector3.prototype.yyx = function() { return new Vector3(this.y, this.y, this.x); }
Vector3.prototype.yyy = function() { return new Vector3(this.y, this.y, this.y); }
Vector3.prototype.yyz = function() { return new Vector3(this.y, this.y, this.z); }
Vector3.prototype.yxx = function() { return new Vector3(this.y, this.x, this.x); }
Vector3.prototype.yxy = function() { return new Vector3(this.y, this.x, this.y); }
Vector3.prototype.yxz = function() { return new Vector3(this.y, this.x, this.z); }
Vector3.prototype.yzx = function() { return new Vector3(this.y, this.z, this.x); }
Vector3.prototype.yzy = function() { return new Vector3(this.y, this.z, this.y); }
Vector3.prototype.yzz = function() { return new Vector3(this.y, this.z, this.z); }
Vector3.prototype.zxx = function() { return new Vector3(this.z, this.x, this.x); }
Vector3.prototype.zxy = function() { return new Vector3(this.z, this.x, this.y); }
Vector3.prototype.zxz = function() { return new Vector3(this.z, this.x, this.z); }
Vector3.prototype.zyx = function() { return new Vector3(this.z, this.y, this.x); }
Vector3.prototype.zyy = function() { return new Vector3(this.z, this.y, this.y); }
Vector3.prototype.zyz = function() { return new Vector3(this.z, this.y, this.z); }
Vector3.prototype.zzx = function() { return new Vector3(this.z, this.z, this.x); }
Vector3.prototype.zzy = function() { return new Vector3(this.z, this.z, this.y); }
Vector3.prototype.zzz = function() { return new Vector3(this.z, this.z, this.z); }

/* Vector3 Math *****************************************************/

Vector3.prototype.add = function(b) {
    return new Vector3(x + b.x, y + b.y, z + b.z);
}

Vector3.prototype.sub = function(b) {
    return new Vector3(x - b.x, y - b.y, z - b.z);
}
Vector3.prototype.subtract = Vector3.prototype.sub;

Vector3.prototype.scale = function(b) {
    return new Vector3(x * b, y * b, z * b);
}

Vector3.prototype.mul = function(b) {
    return new Vector3(x * b.x, y * b.y, z * b.z);
}
Vector3.prototype.multiply = Vector3.prototype.mul;

Vector3.prototype.div = function(b) {
    return new Vector3(x / b.x, y / b.y, z / b.z);
}
Vector3.prototype.divide = Vector3.prototype.div;

Vector3.prototype.len = function() {
    return Math.sqrt(x * x + y * y + z * z);
}
Vector3.prototype.length = Vector3.prototype.len;

Vector3.prototype.dist = function(b) {
    return Vector3.prototype.sub(b).len;
}
Vector3.prototype.distance = Vector3.prototype.dist;

Vector3.prototype.norm = function() {
    let l = new Vector3(x, y, z).len();
    return new Vector3(x / l, y / l, z / l);
}
Vector3.prototype.normalize = Vector3.prototype.norm;

Vector3.prototype.dot = function(b) {
    return x * b.x + y * b.y + z * b.z;
}

Vector3.prototype.lerp = function(b, t) {
    return new Vector3(
        x + (b.x - x) * t,
        y + (b.y - y) * t,
        z + (b.z - z) * t
    )
}
Vector3.prototype.interpolate = Vector3.prototype.lerp;

Vector3.prototype.cross = function(b) {
    return new Vector3(
        y * z - z * y,
        z * x - x * z,
        x * y - y * x
    );
}

Vector3.prototype.reflect = function(n) {
    let p = 2 * Vector3.prototype.dot(n);
    return new Vector3 (
        x - p * n.x,
        y - p * n.y,
        z - p * n.z
    );
}

/* Non-math Vec3 Functions *****************************************************/

Vector3.prototype.toArray = function() {
    return [this.x, this.y, this.z];
}

Vector3.prototype.toString = function() {
    return ("(" + this.x + ", " + this.y + ", " + this.z + ")");
}

Vector3.prototype.set = function(x, y, z) {
    return new Vector3(x, y, z)
}

/* Array Functions *****************************************************/

Array.prototype.toVector = function() {
    if (this.length == 2) {
        return new Vector2(
            this[0],
            this[1]
        );
    } else if (this.length == 3) {
        return new Vector3(
            this[0],
            this[1],
            this[2]
        );
    } else {
        console.error("Invalid Array Length");
        return(0);
    }
}