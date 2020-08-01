/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.13-MariaDB : Database - buengusto
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`buengusto` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `buengusto`;

/*Table structure for table `articulo_insumo` */

DROP TABLE IF EXISTS `articulo_insumo`;

CREATE TABLE `articulo_insumo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `es_catalogo` bit(1) NOT NULL,
  `precio_de_compra` double NOT NULL,
  `precio_de_venta` double NOT NULL,
  `requiere_refrigeracion` bit(1) NOT NULL,
  `stock_actual` float NOT NULL,
  `stock_maximo` float NOT NULL,
  `stock_minimo` float NOT NULL,
  `url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoria_id` bigint(20) DEFAULT NULL,
  `unidad_medida_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgypb5wpxwcmkimq01x5savg6c` (`categoria_id`),
  KEY `FKsbryyhg26404nkn92n1rt0egh` (`unidad_medida_id`),
  CONSTRAINT `FKgypb5wpxwcmkimq01x5savg6c` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  CONSTRAINT `FKsbryyhg26404nkn92n1rt0egh` FOREIGN KEY (`unidad_medida_id`) REFERENCES `unidad_medida` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_insumo` */

insert  into `articulo_insumo`(`id`,`habilitado`,`denominacion`,`es_catalogo`,`precio_de_compra`,`precio_de_venta`,`requiere_refrigeracion`,`stock_actual`,`stock_maximo`,`stock_minimo`,`url_imagen`,`categoria_id`,`unidad_medida_id`) values 
(1,1,'Coca Cola 2L','',70,140,'',15,15,3,'https://www.pikfly.com/images/products/50/13882.jpg',2,1),
(2,1,'Pan de Hamburguesas','\0',8,0,'\0',98,100,30,NULL,19,1),
(3,1,'Medallon de Carne','\0',20,0,'',38,40,15,NULL,15,1),
(4,1,'Lechuga','\0',35,0,'\0',21.8,22,8,NULL,9,2),
(5,1,'Papas','\0',25,0,'\0',12,12,4,NULL,8,2),
(6,1,'Aceite el Cocinero','\0',80,0,'\0',12,12,5,NULL,33,4),
(7,1,'Sal Dos Anclas','\0',40,0,'\0',4,4,2,NULL,35,2),
(8,1,'Queso Barra La Serenisima','\0',230,0,'',6.85,7,3,NULL,24,2),
(9,0,'QWEQWE','\0',222,444,'\0',4555,4555,23,'',21,2),
(10,1,'Ensalada de frutas','',150,250,'',100,100,10,'https://muchosnegociosrentables.com/wp-content/uploads/2018/10/Ensalada-de-frutas-en-el-bote-Consejos-para-hacer-y-vender-en-la-calle.jpeg',7,1),
(11,1,'Helado de chocolate (Sin parar)','',100,200,'',200,200,20,'https://jumboargentina.vteximg.com.br/arquivos/ids/471643-1000-1000/Helado-Pote-Sin-Parar-Helchoc-ddlec-90g-1-250333.jpg?v=636693846921470000',6,1),
(12,1,'Helado Frutilla (Sin Parar)','',100,200,'',20,250,20,'https://jumboargentina.vteximg.com.br/arquivos/ids/471645-1000-1000/Helado-Pote-Sin-Parar-Americana-Y-Frutilla-90-Gr-1-250335.jpg?v=636693846934030000',6,1),
(13,1,'Harina','\0',25,0,'\0',15,100,2,'',32,2),
(14,1,'Salsa de tomate','\0',20,0,'\0',5,10,1,'',10,4),
(15,1,'Huevos','\0',25,0,'\0',25,100,5,'',25,1);

/*Table structure for table `articulo_manufacturado` */

DROP TABLE IF EXISTS `articulo_manufacturado`;

CREATE TABLE `articulo_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `precio_de_venta` double NOT NULL,
  `tiempo_estimado_manuf` int(11) NOT NULL,
  `url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rubro_general_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7dkm6gp2wbtpugm9plyohvnn` (`rubro_general_id`),
  CONSTRAINT `FK7dkm6gp2wbtpugm9plyohvnn` FOREIGN KEY (`rubro_general_id`) REFERENCES `rubro_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_manufacturado` */

insert  into `articulo_manufacturado`(`id`,`habilitado`,`denominacion`,`precio_de_venta`,`tiempo_estimado_manuf`,`url_imagen`,`rubro_general_id`) values 
(1,1,'Hamburguesa con Queso',350,20,'https://www.freejpg.com.ar/asset/900/98/9817/F100009127.jpg',1),
(2,1,'Papas Simples',60,18,'https://www.cocinayvino.com/wp-content/uploads/2017/04/30635150_l.jpg',5),
(3,0,'qweqwe',234,5,'2323',2),
(4,0,'qwe',2,2,'qweqweqwe',2),
(5,1,'Hamburguesa Completa',300,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk6gxpGDMHQwhIIjkujX7IuBVSeOganl1XZA&usqp=CAU',1),
(6,1,'Pizza con peperoni',350,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRN5vYSW0ChYYYQa8MJerQxHECs3njNxlfiA&usqp=CAU',2),
(7,1,'Pizza especial con morrones',350,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRURqgpRzaccR2q62GaAl_Y9XcKOf_QCkSG3Q&usqp=CAU',2),
(8,1,'Pizza vegetariana',300,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1BgX8Z9F01-n2UGH32YBtxLuRe2xf4pprFA&usqp=CAU',2),
(9,1,'Papas con chedar',200,3,'https://i.pinimg.com/originals/4b/f1/8e/4bf18e574771d61aaaac0730764b26d5.jpg',5),
(10,1,'Papas con Chedar y Panceta',300,5,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPwmrrgJGKj6VflGaRA8HgbNsMiBKp7elXqw&usqp=CAU',5),
(11,1,'Hamburguesas extra picantes',350,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8Et23XeGFZkCmArdbgbUxLwF0T_7ItHxAMA&usqp=CAU',1),
(12,1,'Hamburguesa con salsa especial y tocino',450,10,'https://ultimahoraec.com/wp-content/uploads/2019/11/mcdonalds-angus.jpg',1),
(13,1,'Empanada por Docena',300,15,'https://k33.kn3.net/taringa/1/B/6/4/5/C/agsmaldonado/ECB.jpg',3),
(14,1,'Empanadas de pollo por docena/Fritas',350,20,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKZul9vqkjXYykm-TeEsmYCCR2YJkAYih_Zg&usqp=CAU',3),
(15,0,'qweqwe',232,2,'https://prnt.sc/tkb2uc',4),
(16,0,'qweqwe',23,2,'qweqweqwe',1),
(17,0,'qweqwe',2,2,'qwe',1),
(18,0,'qwe',2,2,'2323',4),
(19,0,'qweqw',2323,2,'qweqwe',2),
(20,0,'qweqwe',2,2,'qweqwe',5);

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `es_categoria_catalogo` bit(1) NOT NULL,
  `nombre_categoria` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `padre_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK15fq6y2i5rupnborqxt745bo5` (`padre_id`),
  CONSTRAINT `FK15fq6y2i5rupnborqxt745bo5` FOREIGN KEY (`padre_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `categoria` */

insert  into `categoria`(`id`,`habilitado`,`es_categoria_catalogo`,`nombre_categoria`,`padre_id`) values 
(1,1,'','Bebidas',NULL),
(2,1,'','Sin Alcohol',1),
(3,1,'','Con Alcohol',1),
(4,1,'','Postres',NULL),
(5,1,'','Flanes',4),
(6,1,'','Helados',4),
(7,1,'','Ensalada de Fruta',4),
(8,1,'\0','FrutasyVerduras',NULL),
(9,1,'\0','Lechuga',8),
(10,1,'\0','Tomate',8),
(11,1,'\0','Rucula',8),
(12,1,'\0','Anana',8),
(13,1,'\0','Carnes',NULL),
(14,1,'\0','Pollo',13),
(15,1,'\0','Vaca',13),
(16,1,'\0','Cerdo',13),
(17,1,'\0','Panificados',NULL),
(18,1,'\0','de Mesa',17),
(19,1,'\0','de Hamburguesas',17),
(20,1,'\0','de Lomos',17),
(21,1,'\0','Prepizzas',17),
(22,1,'\0','Lacteos y Huevos',NULL),
(23,1,'\0','Leche de Vaca',22),
(24,1,'\0','Quesos',22),
(25,1,'\0','Huevos de gallina',22),
(26,1,'\0','Aderezos',NULL),
(27,1,'\0','Ketchup',26),
(28,1,'\0','Mostaza',26),
(29,1,'\0','Mayonesa',26),
(30,1,'\0','Salsa Golf',26),
(31,1,'\0','Insumos Varios',NULL),
(32,1,'\0','Harinas',31),
(33,1,'\0','Aceite de Cocina',31),
(34,1,'\0','Vinagre',31),
(35,1,'\0','Sal',31);

/*Table structure for table `cliente` */

DROP TABLE IF EXISTS `cliente`;

CREATE TABLE `cliente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `apellido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` bigint(20) NOT NULL,
  `domicilio_id` bigint(20) DEFAULT NULL,
  `usuario_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhnfwgi8xk38mge49a8twpxtxv` (`domicilio_id`),
  KEY `FKc3u631ocxdrtm3ccpme0kjlmu` (`usuario_id`),
  CONSTRAINT `FKc3u631ocxdrtm3ccpme0kjlmu` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FKhnfwgi8xk38mge49a8twpxtxv` FOREIGN KEY (`domicilio_id`) REFERENCES `domicilio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `cliente` */

insert  into `cliente`(`id`,`habilitado`,`apellido`,`nombre`,`telefono`,`domicilio_id`,`usuario_id`) values 
(2,1,'Ramos','Matias',261626273,1,2),
(3,1,'Ramiro','Bes',2334242,2,3),
(4,1,'Ramos','Matias',261626273,4,4),
(5,1,'Murua','Ramiro',4218874,5,7),
(6,1,'Moya','Alejandro',2616666665,6,8);

/*Table structure for table `configuracion_general` */

DROP TABLE IF EXISTS `configuracion_general`;

CREATE TABLE `configuracion_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `cantidad_cocineros` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `configuracion_general` */

insert  into `configuracion_general`(`id`,`habilitado`,`cantidad_cocineros`,`email`) values 
(1,1,3,'empresa@sada.com');

/*Table structure for table `datos_empresa` */

DROP TABLE IF EXISTS `datos_empresa`;

CREATE TABLE `datos_empresa` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `propietario` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `razon_social` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` int(11) NOT NULL,
  `domicilio_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ieltcaqr5mieyfeb0bhn12wwe` (`domicilio_id`),
  CONSTRAINT `FK777dt8g718k2gjkebi7iyckb7` FOREIGN KEY (`domicilio_id`) REFERENCES `domicilio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `datos_empresa` */

insert  into `datos_empresa`(`id`,`habilitado`,`propietario`,`razon_social`,`telefono`,`domicilio_id`) values 
(3,1,'Macri','Burguesia S.A',26125232,2);

/*Table structure for table `detalle_manufacturado` */

DROP TABLE IF EXISTS `detalle_manufacturado`;

CREATE TABLE `detalle_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `cantidad` int(11) NOT NULL,
  `articulo_insumo_id` bigint(20) DEFAULT NULL,
  `unidad_medida_id` bigint(20) DEFAULT NULL,
  `articulo_manufacturado_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlxaquy4fbruw8bmys96uhnd3e` (`articulo_insumo_id`),
  KEY `FKgf267ubxe9d2ry22r26fifu56` (`unidad_medida_id`),
  KEY `FKsxa9qjxwd4p1k8ya1wsyqrlxn` (`articulo_manufacturado_id`),
  CONSTRAINT `FKgf267ubxe9d2ry22r26fifu56` FOREIGN KEY (`unidad_medida_id`) REFERENCES `unidad_medida` (`id`),
  CONSTRAINT `FKlxaquy4fbruw8bmys96uhnd3e` FOREIGN KEY (`articulo_insumo_id`) REFERENCES `articulo_insumo` (`id`),
  CONSTRAINT `FKsxa9qjxwd4p1k8ya1wsyqrlxn` FOREIGN KEY (`articulo_manufacturado_id`) REFERENCES `articulo_manufacturado` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `detalle_manufacturado` */

insert  into `detalle_manufacturado`(`id`,`habilitado`,`cantidad`,`articulo_insumo_id`,`unidad_medida_id`,`articulo_manufacturado_id`) values 
(5,1,400,5,3,2),
(6,1,100,6,5,2),
(7,1,3,7,6,2),
(56,1,2,4,3,3),
(57,1,2,2,1,1),
(58,1,2,3,1,1),
(59,1,200,4,3,1),
(60,1,150,8,3,1),
(61,1,2,3,2,4),
(63,1,2,2,1,5),
(64,1,2,3,1,5),
(65,1,250,5,3,5),
(66,1,1,4,1,5),
(67,1,500,8,3,6),
(68,1,250,8,3,7),
(69,1,1,6,8,8),
(70,1,300,8,3,8),
(71,1,300,5,3,9),
(72,1,2,7,6,9),
(75,1,2,2,1,11),
(76,1,2,3,1,11),
(77,1,1,4,1,11),
(78,1,250,5,3,11),
(79,1,2,2,1,12),
(80,1,3,3,1,12),
(81,1,2,7,6,12),
(82,1,200,5,3,12),
(83,1,5,7,6,13),
(84,1,500,3,3,13),
(88,1,2,3,2,15),
(90,1,2,3,1,16),
(91,1,2,2,1,17),
(92,1,2,2,2,18),
(95,1,500,6,4,14),
(96,1,20,7,3,14),
(97,1,2,3,2,19),
(100,1,3,3,1,20),
(101,1,350,5,3,10),
(102,1,200,8,3,10);

/*Table structure for table `detalle_pedido` */

DROP TABLE IF EXISTS `detalle_pedido`;

CREATE TABLE `detalle_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `aclaracion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `es_insumo` bit(1) NOT NULL,
  `subtotal` double NOT NULL,
  `articuloinsumo_id` bigint(20) DEFAULT NULL,
  `articulomanufacturado_id` bigint(20) DEFAULT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKld3d0tj3got8vfnhr1hcoq0oe` (`articuloinsumo_id`),
  KEY `FKnfgeuh1wr09uikxi3i6dqypfl` (`articulomanufacturado_id`),
  KEY `FKgqvba9e7dildyw45u0usdj1k2` (`pedido_id`),
  CONSTRAINT `FKgqvba9e7dildyw45u0usdj1k2` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  CONSTRAINT `FKld3d0tj3got8vfnhr1hcoq0oe` FOREIGN KEY (`articuloinsumo_id`) REFERENCES `articulo_insumo` (`id`),
  CONSTRAINT `FKnfgeuh1wr09uikxi3i6dqypfl` FOREIGN KEY (`articulomanufacturado_id`) REFERENCES `articulo_manufacturado` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `detalle_pedido` */

insert  into `detalle_pedido`(`id`,`habilitado`,`aclaracion`,`cantidad`,`es_insumo`,`subtotal`,`articuloinsumo_id`,`articulomanufacturado_id`,`pedido_id`) values 
(1,1,NULL,2,'\0',500,NULL,1,1),
(2,1,NULL,1,'\0',60,NULL,2,1),
(3,1,NULL,1,'',140,1,NULL,1),
(4,1,'Sin queso',1,'\0',250,NULL,1,2),
(5,1,NULL,1,'',140,1,NULL,2),
(6,1,'',1,'\0',60,NULL,2,3),
(7,1,'',1,'\0',250,NULL,1,3),
(8,1,'',1,'',140,1,NULL,3),
(9,1,'',1,'\0',250,NULL,1,4),
(10,1,'',1,'\0',250,NULL,1,5),
(11,1,'',1,'\0',60,NULL,2,6),
(12,1,'',1,'',140,1,NULL,7),
(13,1,'',1,'\0',60,NULL,2,8),
(14,1,'',1,'\0',60,NULL,2,9),
(15,1,'',1,'\0',350,NULL,1,10);

/*Table structure for table `domicilio` */

DROP TABLE IF EXISTS `domicilio`;

CREATE TABLE `domicilio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `aclaracion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `calle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nro_departamento` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `piso` int(11) NOT NULL,
  `localidad_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8t63gx4v022qapv45vdwld71j` (`localidad_id`),
  CONSTRAINT `FK8t63gx4v022qapv45vdwld71j` FOREIGN KEY (`localidad_id`) REFERENCES `localidad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `domicilio` */

insert  into `domicilio`(`id`,`habilitado`,`aclaracion`,`calle`,`nro_departamento`,`numero`,`piso`,`localidad_id`) values 
(1,1,'Porton de rejas','Bordin',0,126,0,1),
(2,1,'Donde esta el gato gordo en el balcon','San Martin',2,320,1,2),
(3,1,'Cerca de plaza de armas','La Wea',0,123,3,3),
(4,1,'Porton de rejas','Bordin',0,126,0,4),
(5,1,'justo en la esquina','las araucarias',2,3590,1,2),
(6,1,'Mi casa','12 de octubre',1,1,1,1);

/*Table structure for table `estado_pedido` */

DROP TABLE IF EXISTS `estado_pedido`;

CREATE TABLE `estado_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `nombre_estado` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `estado_pedido` */

insert  into `estado_pedido`(`id`,`habilitado`,`nombre_estado`) values 
(1,1,'Pendiente'),
(2,1,'Cancelado'),
(3,1,'Confirmado'),
(4,1,'Preparando'),
(5,1,'En camino'),
(6,1,'Entregado'),
(7,1,'Listo'),
(8,1,'Facturado');

/*Table structure for table `factura` */

DROP TABLE IF EXISTS `factura`;

CREATE TABLE `factura` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `fecha` date DEFAULT NULL,
  `forma_pago` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `monto_descuento` double NOT NULL,
  `nro_factura` int(11) NOT NULL,
  `nro_tarjeta` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tipo_factura` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `total_factura` double NOT NULL,
  `datos_empresa_id` bigint(20) DEFAULT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3t40tewmitdf9kg1n2fq3yfeq` (`datos_empresa_id`),
  KEY `FKn6q9mbkc0n4g1uux57clh2bq0` (`pedido_id`),
  CONSTRAINT `FK3t40tewmitdf9kg1n2fq3yfeq` FOREIGN KEY (`datos_empresa_id`) REFERENCES `datos_empresa` (`id`),
  CONSTRAINT `FKn6q9mbkc0n4g1uux57clh2bq0` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `factura` */

insert  into `factura`(`id`,`habilitado`,`fecha`,`forma_pago`,`monto_descuento`,`nro_factura`,`nro_tarjeta`,`tipo_factura`,`total_factura`,`datos_empresa_id`,`pedido_id`) values 
(1,1,'2020-07-14','Contado',10,2234,NULL,'C',630,3,1),
(2,1,'2020-07-14','Tarjeta',0,2235,'2322-2344-2311-5728','C',390,3,2),
(3,1,'2020-07-14','Efectivo',45,2236,NULL,'C',450,3,3),
(4,1,'2020-07-17','Efectivo',25,2237,NULL,'C',250,3,4),
(5,1,'2020-07-17','Efectivo',25,2238,NULL,'C',250,3,5),
(6,1,'2020-07-17','Tarjeta',6,2239,NULL,'C',60,3,6),
(7,1,'2020-07-17','Tarjeta',14,2240,NULL,'C',140,3,7),
(8,1,'2020-07-29','Efectivo',6,2241,'0','C',60,3,9),
(9,1,'2020-07-29','Debito',0,2242,'2222222222222222222','C',350,3,10);

/*Table structure for table `horario_laboral` */

DROP TABLE IF EXISTS `horario_laboral`;

CREATE TABLE `horario_laboral` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `horario_fin` time DEFAULT NULL,
  `horario_inicio` time DEFAULT NULL,
  `nombre_dia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `configuracion_general_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoxbk5968v3rqdtc9xd2s9ox8l` (`configuracion_general_id`),
  CONSTRAINT `FKoxbk5968v3rqdtc9xd2s9ox8l` FOREIGN KEY (`configuracion_general_id`) REFERENCES `configuracion_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `horario_laboral` */

insert  into `horario_laboral`(`id`,`habilitado`,`horario_fin`,`horario_inicio`,`nombre_dia`,`configuracion_general_id`) values 
(1,1,'02:59:59','23:00:00','Lunes',1),
(7,1,'18:00:00','14:00:00','Sabados',1),
(8,1,'18:00:00','14:00:00','Domingos',1);

/*Table structure for table `localidad` */

DROP TABLE IF EXISTS `localidad`;

CREATE TABLE `localidad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `provincia_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK37mbpxuicwnbo878s9djjgr39` (`provincia_id`),
  CONSTRAINT `FK37mbpxuicwnbo878s9djjgr39` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `localidad` */

insert  into `localidad`(`id`,`habilitado`,`nombre`,`provincia_id`) values 
(1,1,'Maipu',1),
(2,1,'Centro',2),
(3,1,'LocSan',3),
(4,1,'LocSan',4);

/*Table structure for table `pais` */

DROP TABLE IF EXISTS `pais`;

CREATE TABLE `pais` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `pais` */

insert  into `pais`(`id`,`habilitado`,`nombre`) values 
(1,1,'Argentino'),
(2,1,'Chile');

/*Table structure for table `pedido` */

DROP TABLE IF EXISTS `pedido`;

CREATE TABLE `pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `fecha_realizacion` datetime DEFAULT NULL,
  `hora_estimada_fin` datetime DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `tipo_envio` bit(1) NOT NULL,
  `cliente_id` bigint(20) DEFAULT NULL,
  `estado_pedido_id` bigint(20) DEFAULT NULL,
  `min_totalsin_delivery` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK30s8j2ktpay6of18lbyqn3632` (`cliente_id`),
  KEY `FKpapbin6tgk2j5es15ajwxfmv2` (`estado_pedido_id`),
  CONSTRAINT `FK30s8j2ktpay6of18lbyqn3632` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKpapbin6tgk2j5es15ajwxfmv2` FOREIGN KEY (`estado_pedido_id`) REFERENCES `estado_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `pedido` */

insert  into `pedido`(`id`,`habilitado`,`fecha_realizacion`,`hora_estimada_fin`,`numero`,`tipo_envio`,`cliente_id`,`estado_pedido_id`,`min_totalsin_delivery`) values 
(1,1,'2020-06-27 18:36:17','2020-06-27 18:56:20',23,'\0',2,7,0),
(2,1,'2020-06-26 18:36:29','2020-06-26 19:46:33',24,'',2,7,0),
(3,1,'2020-07-14 19:32:08','2020-07-14 20:20:08',25,'\0',3,7,38),
(4,1,'2020-07-17 13:56:14','2020-07-17 14:25:14',26,'\0',5,7,20),
(5,1,'2020-07-17 13:56:34','2020-07-17 14:30:34',27,'\0',5,7,20),
(6,1,'2020-07-17 14:02:02','2020-07-17 14:39:02',28,'\0',5,7,18),
(7,1,'2020-07-17 14:11:32','2020-07-17 14:35:32',29,'\0',5,3,0),
(8,1,'2020-07-29 22:53:20','2020-07-29 23:35:20',30,'\0',6,2,18),
(9,1,'2020-07-29 22:54:07','2020-07-29 23:40:07',31,'\0',6,1,18),
(10,1,'2020-07-29 22:55:17','2020-07-29 23:58:17',32,'\0',6,8,20);

/*Table structure for table `provincia` */

DROP TABLE IF EXISTS `provincia`;

CREATE TABLE `provincia` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pais_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm4s599988w0v1q1nw6dyo5t2m` (`pais_id`),
  CONSTRAINT `FKm4s599988w0v1q1nw6dyo5t2m` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `provincia` */

insert  into `provincia`(`id`,`habilitado`,`nombre`,`pais_id`) values 
(1,1,'Mendoza',1),
(2,1,'Cordoba',1),
(3,1,'Santiago de Chile',2),
(4,1,'Valparaiso',2);

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `nombre_rol` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rol` */

insert  into `rol`(`id`,`habilitado`,`nombre_rol`) values 
(1,1,'Administrador'),
(2,1,'Cajero'),
(3,1,'Cocinero'),
(4,1,'Repartidor'),
(5,1,'Cliente');

/*Table structure for table `rubro_general` */

DROP TABLE IF EXISTS `rubro_general`;

CREATE TABLE `rubro_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rubro_general` */

insert  into `rubro_general`(`id`,`habilitado`,`denominacion`) values 
(1,1,'Hamburguesas'),
(2,1,'Pizzas'),
(3,1,'Empanadas'),
(4,1,'Lomos'),
(5,1,'Papas Fritas');

/*Table structure for table `unidad_medida` */

DROP TABLE IF EXISTS `unidad_medida`;

CREATE TABLE `unidad_medida` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `abreviatura` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `equivalencia_kgol` double NOT NULL,
  `para_recetas` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `unidad_medida` */

insert  into `unidad_medida`(`id`,`habilitado`,`abreviatura`,`denominacion`,`equivalencia_kgol`,`para_recetas`) values 
(1,1,'u','Unidad',1,'\0'),
(2,1,'Kg','Kilogramos',1,'\0'),
(3,1,'g','Gramos',0.001,'\0'),
(4,1,'L','Litros',1,'\0'),
(5,1,'ml','Mililitros',0.001,'\0'),
(6,1,'pizca','Pizca',0.004,''),
(7,1,'tapita','tapita',0.007,''),
(8,1,'cucharada','Cucharada',0.012,''),
(9,1,'taza','Taza',0.15,'');

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT 1,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uid_firebase` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rol_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKshkwj12wg6vkm6iuwhvcfpct8` (`rol_id`),
  CONSTRAINT `FKshkwj12wg6vkm6iuwhvcfpct8` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `usuario` */

insert  into `usuario`(`id`,`habilitado`,`email`,`uid_firebase`,`rol_id`) values 
(1,1,'luis_asd@sdas','223',1),
(2,1,'luis_assad@asad.com','23',1),
(3,0,'murua99@ssfa.com','234',4),
(4,1,'moya@gasf.com','244',2),
(5,1,'moyaaaa@fsafa.com','2324',3),
(6,1,'ramos@sfacom','2423',5),
(7,1,'ramiroamurua@hotmail.com','4GNsUdndOagzIhNN7I69uZZHGz52',1),
(8,1,'alejandro5320@gmail.com','fMnIWAyDbacNyZnPjFgZrLB4ctY2',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
