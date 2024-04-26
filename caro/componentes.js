const cabecera = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<style>
.truncate-text {
    white-space: nowrap;  
    overflow: hidden;  
    text-overflow: ellipsis; 
}
.card-img-top{
    width:150px;
    height:150px;
    
}
 
.ui-w-40 {
    width: 40px !important;
    height: auto;
}

.card{
    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);    
}

 
</style>


`;
const inicioContenedor = ` <div class="container">
<div class="row">
    <div class="col-10">
        <h1 style="text-align: center;">La tienda de Caro</h1>
    </div>
    <div class="col-2">
        <a href="carrito"><button class="btn btn-success">carrito</button></a>
    </div>
</div>
<div class="row">`;

const finContenedor = `</div>
</div>`;
const fin = `
</body>
</html>`;

module.exports = {cabecera, fin, inicioContenedor, finContenedor}