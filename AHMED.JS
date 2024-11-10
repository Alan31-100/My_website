let total = 0;
const orders = []; 
let searchTimeout; // متغير لتخزين مهلة البحث

// وظيفة البحث عن المنتجات حسب القسم
document.getElementById('searchInput').addEventListener('input', function() {
    clearTimeout(searchTimeout); // مسح المهلة السابقة
    const searchTerm = this.value.toLowerCase();

    searchTimeout = setTimeout(() => {
        const orderList = document.getElementById('orderList');
        orderList.innerHTML = ''; // مسح القائمة الحالية

        orders.forEach(order => {
            if (order.category.toLowerCase().includes(searchTerm)) {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <span>المنتج: ${order.product}, الكمية: ${order.quantity}, سعر الوحدة: ${order.price}, المجموع: ${order.itemTotal.toFixed(2)}, الهاتف: ${order.phone}, البريد: ${order.email}, تاريخ التسليم: ${order.deliveryDate}, الإشعار: ${order.notify ? 'نعم' : 'لا'}, القسم: ${order.category}, التاريخ: ${order.dateTime}${order.imageFile ? `<img src="${URL.createObjectURL(order.imageFile)}" class="image-preview" alt="صورة المنتج">` : ''}</span>
                    <button class="delete-button">حذف</button>
                `;
                
                orderItem.querySelector('.delete-button').addEventListener('click', function() {
                    total -= order.itemTotal;
                    orderList.removeChild(orderItem);
                    orders.splice(orders.indexOf(order), 1);
                    document.getElementById('totalAmount').textContent = `المجموع الكلي: ${total.toFixed(2)}`;
                });
                orderList.appendChild(orderItem);
            }
        });
    }, 300); // تأخير البحث بـ 300 مللي ثانية
});
{
    "title": "Order Management",
    "product": "Product",
    "quantity": "Quantity",
    "price": "Price",
    "phone": "Phone Number",
    "email": "Email",
    "deliveryDate": "Expected Delivery Date",
    "notification": "Notification on Arrival",
    "addOrder": "Add Order",
    "search": "Search by Category",
    "share": "Share the App",
    "export": "Export Data to CSV",
    "total": "Total Amount",
    "yes": "Yes",
    "no": "No"
}
{
    "title": "إدارة الطلبيات",
    "product": "اسم المنتج",
    "quantity": "الكمية",
    "price": "سعر المنتج",
    "phone": "رقم الهاتف",
    "email": "البريد الإلكتروني",
    "deliveryDate": "تاريخ التسليم المتوقع",
    "notification": "الإشعار بوصول المنتج",
    "addOrder": "إضافة طلب",
    "search": "ابحث عن المنتجات حسب القسم",
    "share": "مشاركة التطبيق",
    "export": "تصدير البيانات إلى CSV",
    "total": "المجموع الكلي",
    "yes": "نعم",
    "no": "لا"
}
let currentLanguage = 'ar'; // اللغة الافتراضية
let translations = {};

function loadTranslations(language) {
    fetch(`${language}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updateText();
        })
        .catch(error => console.error('Error loading translations:', error));
}

function updateText() {
    document.title = translations.title;
    document.getElementById('product').placeholder = translations.product;
    document.getElementById('quantity').placeholder = translations.quantity;
    document.getElementById('price').placeholder = translations.price;
    document.getElementById('phone').placeholder = translations.phone;
    document.getElementById('email').placeholder = translations.email;
    document.getElementById('deliveryDate').placeholder = translations.deliveryDate;
    document.getElementById('notificationLabel').innerText = translations.notification;
    document.getElementById('addOrderButton').innerText = translations.addOrder;
    document.getElementById('searchInput').placeholder = translations.search;
    document.getElementById('shareButton').innerText = translations.share;
    document.getElementById('exportButton').innerText = translations.export;
    document.getElementById('totalAmount').innerText = translations.total;
}
{
    "title": "Gestion des commandes",
    "product": "Produit",
    "quantity": "Quantité",
    "price": "Prix",
    "phone": "Numéro de téléphone",
    "email": "Email",
    "deliveryDate": "Date de livraison prévue",
    "notification": "Notification à l'arrivée",
    "addOrder": "Ajouter une commande",
    "search": "Rechercher par catégorie",
    "share": "Partager l'application",
    "export": "Exporter les données au format CSV",
    "total": "Montant total",
    "yes": "Oui",
    "no": "Non"
}
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const notify = document.getElementById('notification').checked;
    const imageFile = document.getElementById('image').files[0];
    const category = document.getElementById('category').value; // القسم الجديد
    const dateTime = new Date().toLocaleString();

    const order = {
        product,
        quantity,
        price,
        phone,
        email,
        deliveryDate,
        notify,
        category,
        dateTime,
        itemTotal: quantity * price,
        imageFile
    };

    orders.push(order);
    displayOrder(order);
    saveOrders();
    document.getElementById('orderForm').reset();
});
function displayOrder(order) {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <span>المنتج: ${order.product}, الكمية: ${order.quantity}, سعر الوحدة: ${order.price}, المجموع: ${order.itemTotal.toFixed(2)}, الهاتف: ${order.phone}, البريد: ${order.email}, تاريخ التسليم: ${order.deliveryDate}, الإشعار: ${order.notify ? 'نعم' : 'لا'}, القسم: ${order.category}, التاريخ: ${order.dateTime}</span>
        <button class="delete-button">حذف</button>
    `;
    // بقية الكود كما هو
}
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const notify = document.getElementById('notification').checked;
    const additionalNotes = document.getElementById('additionalNotes').value; // ملاحظات إضافية
    const category = document.getElementById('category').value;
    const dateTime = new Date().toLocaleString();

    const order = {
        product,
        quantity,
        price,
        phone,
        email,
        deliveryDate,
        notify,
        additionalNotes, // إضافة الملاحظات إلى الطلب
        category,
        dateTime,
        itemTotal: quantity * price
    };

    orders.push(order);
    displayOrder(order);
    saveOrders();
    document.getElementById('orderForm').reset();
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const notify = document.getElementById('notification').checked;
    const additionalNotes = document.getElementById('additionalNotes').value; // ملاحظات إضافية
    const category = document.getElementById('category').value;
    const dateTime = new Date().toLocaleString();

    const order = {
        product,
        quantity,
        price,
        phone,
        email,
        deliveryDate,
        notify,
        additionalNotes, // إضافة الملاحظات إلى الطلب
        category,
        dateTime,
        itemTotal: quantity * price
    };

    orders.push(order);
    displayOrder(order);
    saveOrders();
    document.getElementById('orderForm').reset();
});
function displayOrder(order) {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <span>المنتج: ${order.product}, الكمية: ${order.quantity}, سعر الوحدة: ${order.price}, المجموع: ${order.itemTotal.toFixed(2)}, الهاتف: ${order.phone}, البريد: ${order.email}, تاريخ التسليم: ${order.deliveryDate}, الإشعار: ${order.notify ? 'نعم' : 'لا'}, القسم: ${order.category}, الملاحظات: ${order.additionalNotes}, التاريخ: ${order.dateTime}</span>
        <button class="delete-button">حذف</button>
    `;
    // بقية الكود كما هو
}
function displayOrder(order) {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <span>المنتج: ${order.product}, الكمية: ${order.quantity}, سعر الوحدة: ${order.price}, المجموع: ${order.itemTotal.toFixed(2)}, الهاتف: ${order.phone}, البريد: ${order.email}, تاريخ التسليم: ${order.deliveryDate}, الإشعار: ${order.notify ? 'نعم' : 'لا'}, القسم: ${order.category}, الملاحظات: ${order.additionalNotes}, التاريخ: ${order.dateTime}</span>
        <button class="edit-button">تعديل</button>
        <button class="delete-button">حذف</button>
    `;

    // إضافة وظيفة تعديل الطلب
    orderItem.querySelector('.edit-button').addEventListener('click', function() {
        document.getElementById('product').value = order.product;
        document.getElementById('quantity').value = order.quantity;
        document.getElementById('price').value = order.price;
        document.getElementById('phone').value = order.phone;
        document.getElementById('email').value = order.email;
        document.getElementById('deliveryDate').value = order.deliveryDate;
        document.getElementById('notification').checked = order.notify;
        document.getElementById('additionalNotes').value = order.additionalNotes; // ملء الملاحظات
        // إضافة منطق لتحديث الطلب عند الإرسال
        document.getElementById('orderForm').onsubmit = function(e) {
            e.preventDefault();
            // تحديث الطلب في المصفوفة orders
            const index = orders.indexOf(order);
            orders[index] = {
                ...order,
                product: document.getElementById('product').value,
                quantity: parseInt(document.getElementById('quantity').value),
                price: parseFloat(document.getElementById('price').value),
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                deliveryDate: document.getElementById('deliveryDate').value,
                notify: document.getElementById('notification').checked,
                additionalNotes: document.getElementById('additionalNotes').value
            };
            saveOrders();
            orderList.innerHTML = ''; // تفريغ القائمة
            orders.forEach(displayOrder); // إعادة عرض الطلبات
            document.getElementById('orderForm').reset();
        };
    });

    orderItem.querySelector('.delete-button').addEventListener('click', function() {
        total -= order.itemTotal;
        orderList.removeChild(orderItem);
        orders.splice(orders.indexOf(order), 1);
        saveOrders();
        document.getElementById('totalAmount').textContent = `المجموع الكلي: ${total.toFixed(2)}`;
    });

    orderList.appendChild(orderItem);
    total += order.itemTotal;
}
use ordersDB
db.createCollection("orders")
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// إعداد الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost:27017/ordersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// نموذج الطلبات
const orderSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    price: Number,
    phone: String,
    email: String,
    deliveryDate: Date,
    notify: Boolean,
    additionalNotes: String,
    category: String,
    dateTime: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// إعداد middleware
app.use(cors());
app.use(bodyParser.json());

// نقطة النهاية لحفظ الطلبات
app.post('/api/orders', async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
async function saveOrder(order) {
    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const savedOrder = await response.json();
        console.log('Order saved:', savedOrder);
    } catch (error) {
        console.error('Error saving order:', error);
    }
}

// تعديل حدث إرسال النموذج
document.getElementById('orderForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const notify = document.getElementById('notification').checked;
    const additionalNotes = document.getElementById('additionalNotes').value;
    const category = document.getElementById('category').value;
    const dateTime = new Date().toLocaleString();

    const order = {
        product,
        quantity,
        price,
        phone,
        email,
        deliveryDate,
        notify,
        additionalNotes,
        category,
        dateTime,
        itemTotal: quantity * price
    };

    await saveOrder(order);
    // تابع بقية الكود كما هو
});
function displayOrder(order) {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <div>
            <strong>المنتج:</strong> ${order.product}<br>
            <strong>الكمية:</strong> ${order.quantity}<br>
            <strong>سعر الوحدة:</strong> ${order.price}<br>
            <strong>المجموع:</strong> ${order.itemTotal.toFixed(2)}<br>
            <strong>الهاتف:</strong> ${order.phone}<br>
            <strong>البريد:</strong> ${order.email}<br>
            <strong>تاريخ التسليم:</strong> ${order.deliveryDate}<br>
            <strong>الإشعار:</strong> ${order.notify ? 'نعم' : 'لا'}<br>
            <strong>الملاحظات:</strong> ${order.additionalNotes}<br>
            <strong>التاريخ:</strong> ${order.dateTime}<br>
        </div>
        <button class="btn btn-danger btn-sm delete-button">حذف</button>
        <button class="btn btn-warning btn-sm edit-button">تعديل</button>
    `;
    
    // إضافة وظائف الحذف والتعديل كما هو موضح سابقًا
    // ...
    
    orderList.appendChild(orderItem);
}
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const PORT = 3000;

// إعداد الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost:27017/ordersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// نموذج الطلبات
const orderSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    price: Number,
    phone: String,
    email: String,
    deliveryDate: Date,
    notify: Boolean,
    additionalNotes: String,
    category: String,
    dateTime: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// إعداد middleware
app.use(cors());
app.use(bodyParser.json());

// إعداد Twilio
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID'; // استبدل بـ Account SID الخاص بك
const authToken = 'YOUR_TWILIO_AUTH_TOKEN'; // استبدل بـ Auth Token الخاص بك
const client = twilio(accountSid, authToken);

// نقطة النهاية لحفظ الطلبات
app.post('/api/orders', async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        
        // إرسال رسالة نصية
        if (savedOrder.notify) {
            await client.messages.create({
                body: `تم استلام طلبك: ${savedOrder.product}. الكمية: ${savedOrder.quantity}.`,
                from: 'YOUR_TWILIO_PHONE_NUMBER', // رقم هاتف Twilio الخاص بك
                to: savedOrder.phone // رقم الهاتف الذي أدخله المستخدم
            });
        }

        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
await client.messages.create({
    body: `تم استلام طلبك: ${savedOrder.product}. الكمية: ${savedOrder.quantity}.`,
    from: 'YOUR_TWILIO_PHONE_NUMBER', // رقم هاتف Twilio الخاص بك
    to: savedOrder.phone // رقم الهاتف الذي أدخله المستخدم
});
await client.messages.create({
    body: `مرحبًا! لقد تم استلام طلبك بنجاح:\n\n` +
          `المنتج: ${savedOrder.product}\n` +
          `الكمية: ${savedOrder.quantity}\n` +
          `السعر: ${savedOrder.price} ريال\n` +
          `تاريخ التسليم المتوقع: ${savedOrder.deliveryDate}\n\n` +
          `إذا كان لديك أي استفسارات، لا تتردد في الاتصال بنا على ${savedOrder.phone}. شكرًا لك!`,
    from: 'YOUR_TWILIO_PHONE_NUMBER', // رقم هاتف Twilio الخاص بك
    to: savedOrder.phone // رقم الهاتف الذي أدخله المستخدم
});
function displayOrder(order) {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <div>
            <strong>المنتج:</strong> ${order.product}<br>
            <strong>الكمية:</strong> ${order.quantity}<br>
            <strong>سعر الوحدة:</strong> ${order.price}<br>
            <strong>المجموع:</strong> ${order.itemTotal.toFixed(2)}<br>
            <strong>الهاتف:</strong> ${order.phone}<br>
            <strong>البريد:</strong> ${order.email}<br>
            <strong>تاريخ التسليم:</strong> ${order.deliveryDate}<br>
            <strong>الإشعار:</strong> ${order.notify ? 'نعم' : 'لا'}<br>
            <strong>الملاحظات:</strong> ${order.additionalNotes}<br>
            <strong>التاريخ:</strong> ${order.dateTime}<br>
        </div>
        <button class="btn btn-danger btn-sm delete-button">حذف</button>
        <button class="btn btn-warning btn-sm edit-button">تعديل</button>
    `;

    // إضافة وظائف للحذف والتعديل كما هو موضح سابقًا
    // ...

    orderList.appendChild(orderItem);
}
orderItem.innerHTML = `
    <div>
        ...
    </div>
    <button class="btn btn-danger btn-sm delete-button"><i class="fas fa-trash"></i> حذف</button>
    <button class="btn btn-warning btn-sm edit-button"><i class="fas fa-edit"></i> تعديل</button>
`;
document.getElementById('printButton').addEventListener('click', function() {
    printOrders();
});

function printOrders() {
    // إنشاء نافذة جديدة
    const printWindow = window.open('', '_blank');
    
    // إعداد محتوى الطباعة
    let printContent = `
        <html>
        <head>
            <title>طباعة قائمة الطلبات</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #dddddd; text-align: left; padding: 8px; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <h1>قائمة الطلبات</h1>
            <table>
                <tr>
                    <th>المنتج</th>
                    <th>الكمية</th>
                    <th>السعر</th>
                    <th>الهاتف</th>
                    <th>البريد</th>
                    <th>تاريخ التسليم</th>
                    <th>الملاحظات</th>
                </tr>
    `;

    // إضافة الطلبات إلى المحتوى
    orders.forEach(order => {
        printContent += `
            <tr>
                <td>${order.product}</td>
                <td>${order.quantity}</td>
                <td>${order.price}</td>
                <td>${order.phone}</td>
                <td>${order.email}</td>
                <td>${order.deliveryDate}</td>
                <td>${order.additionalNotes}</td>
            </tr>
        `;
    });

    printContent += `
            </table>
        </body>
        </html>
    `;

    // كتابة المحتوى إلى النافذة
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print(); // فتح نافذة الطباعة
}
function printOrders() {
    const printContent = document.getElementById('orderList').innerHTML; // افترض أن لديك عنصر يحتوي على الطلبات
    printJS({ 
        printable: printContent, 
        type: 'html',
        style: 'table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #dddddd; text-align: left; padding: 8px; } th { background-color: #f2f2f2; }'
    });
}
async function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("قائمة الطلبات", 20, 20);
    let y = 30; // موضع بدء الكتابة

    orders.forEach(order => {
        doc.text(`المنتج: ${order.product}, الكمية: ${order.quantity}, السعر: ${order.price}`, 20, y);
        y += 10; // الانتقال إلى السطر التالي
    });

    doc.save("orders.pdf");
}
async function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("قائمة الطلبيات", 20, 20);
    doc.setFontSize(12);

    // إضافة عنوان الأعمدة
    const columns = ["المنتج", "الكمية", "السعر", "الهاتف", "البريد", "تاريخ التسليم", "الملاحظات"];
    const rows = [];

    // إضافة الطلبيات إلى الصفوف
    orders.forEach(order => {
        rows.push([
            order.product,
            order.quantity,
            order.price,
            order.phone,
            order.email,
            order.deliveryDate,
            order.additionalNotes
        ]);
    });

    // استخدام autoTable لإضافة الجدول
    doc.autoTable({
        head: [columns],
        body: rows,
    });

    // حفظ الملف
    doc.save("orders.pdf");
}
document.getElementById('pdfButton').addEventListener('click', exportToPDF);
// مصفوفة لتخزين الطلبيات
let orders = [];

// دالة لتحميل الطلبات من Local Storage
function loadOrders() {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
        orders = JSON.parse(storedOrders);
        orders.forEach(order => displayOrder(order)); // عرض الطلبات المحفوظة
    }
}

// دالة لحفظ الطلبات في Local Storage
function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// دالة لعرض الطلب
function displayOrder(order) {
    const orderList = document.getElementById('orderList');
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <div>
            <strong>المنتج:</strong> ${order.product}<br>
            <strong>الكمية:</strong> ${order.quantity}<br>
            <strong>سعر الوحدة:</strong> ${order.price}<br>
            <strong>الهاتف:</strong> ${order.phone}<br>
            <strong>البريد:</strong> ${order.email}<br>
            <strong>تاريخ التسليم:</strong> ${order.deliveryDate}<br>
            <strong>الملاحظات:</strong> ${order.additionalNotes}<br>
        </div>
    `;
    orderList.appendChild(orderItem);
}

// دالة لإضافة طلب جديد
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const newOrder = {
        product: document.getElementById('product').value,
        quantity: parseInt(document.getElementById('quantity').value),
        price: parseFloat(document.getElementById('price').value),
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        deliveryDate: document.getElementById('deliveryDate').value,
        additionalNotes: document.getElementById('additionalNotes').value,
    };

    orders.push(newOrder); // إضافة الطلب إلى المصفوفة
    displayOrder(newOrder); // عرض الطلب الجديد
    saveOrders(); // حفظ الطلبات في Local Storage

    // إعادة تعيين النموذج
    document.getElementById('orderForm').reset();
});

// تحميل الطلبات عند بدء التطبيق
loadOrders();
document.getElementById('logoutButton').addEventListener('click', function() {
    // مسح البيانات المخزنة
    localStorage.removeItem('orders'); // حذف الطلبات المخزنة
    orders = []; // إعادة تعيين مصفوفة الطلبات

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول أو الصفحة الرئيسية
    window.location.href = 'login.html'; // استبدل بـ URL صفحة تسجيل الدخول الخاصة بك
});
document.getElementById('logoutButton').addEventListener('click', function() {
    Swal.fire({
        title: 'هل أنت متأكد؟',
        text: "سوف يتم تسجيل خروجك من التطبيق.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'نعم، تسجيل الخروج',
        cancelButtonText: 'إلغاء'
    }).then((result) => {
        if (result.isConfirmed) {
            // إذا أكد المستخدم، قم بتسجيل الخروج
            localStorage.removeItem('orders'); // حذف الطلبات المخزنة
            orders = []; // إعادة تعيين مصفوفة الطلبات
            window.location.href = 'login.html'; // إعادة التوجيه إلى صفحة تسجيل الدخول
        }
    });
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const newOrder = {
        product: document.getElementById('product').value,
        quantity: parseInt(document.getElementById('quantity').value),
        price: parseFloat(document.getElementById('price').value),
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        deliveryDate: document.getElementById('deliveryDate').value,
        additionalNotes: document.getElementById('additionalNotes').value,
        orderDate: document.getElementById('orderDate').value // تضمين تاريخ الطلب
    };

    orders.push(newOrder); // إضافة الطلب إلى المصفوفة
    displayOrder(newOrder); // عرض الطلب الجديد
    saveOrders(); // حفظ الطلبات في Local Storage

    // إعادة تعيين النموذج
    document.getElementById('orderForm').reset();
});
function displayOrder(order) {
    const orderList = document.getElementById('orderList');
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
        <div>
            <strong>المنتج:</strong> ${order.product}<br>
            <strong>الكمية:</strong> ${order.quantity}<br>
            <strong>سعر الوحدة:</strong> ${order.price}<br>
            <strong>الهاتف:</strong> ${order.phone}<br>
            <strong>البريد:</strong> ${order.email}<br>
            <strong>تاريخ التسليم:</strong> ${order.deliveryDate}<br>
            <strong>تاريخ الطلب:</strong> ${order.orderDate}<br> <!-- إضافة تاريخ الطلب هنا -->
            <strong>الملاحظات:</strong> ${order.additionalNotes}<br>
        </div>
    `;
    orderList.appendChild(orderItem);
}
document.getElementById('orderDate').value = new 
Date().toISOString().split('T')[0]; // تعيين التاريخ الحالي
// دالة لتفعيل التعرف على الصوت
document.getElementById('voiceButton').addEventListener('click', function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ar-SA'; // تعيين اللغة إلى العربية
    recognition.interimResults = false; // لا تستخدم النتائج المؤقتة

    recognition.onstart = function() {
        console.log('تفعيل التعرف على الصوت...');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript; // الحصول على النص المعترف به
        document.getElementById('product').value = transcript; // تحديث حقل اسم المنتج
        console.log('تم التعرف على الصوت: ' + transcript);
    };

    recognition.onerror = function(event) {
        console.error('حدث خطأ: ' + event.error);
    };

    recognition.onend = function() {
        console.log('انتهى التعرف على الصوت.');
    };

    recognition.start(); // بدء التعرف على الصوت
});