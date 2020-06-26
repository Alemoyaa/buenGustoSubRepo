/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.37 : Database - buenGusto
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`buenGusto` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `buenGusto`;

/*Table structure for table `articulo` */

DROP TABLE IF EXISTS `articulo`;

CREATE TABLE `articulo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `es_catalogo` bit(1) NOT NULL,
  `precio_de_venta` double NOT NULL,
  `url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoria_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK35xlp590328eybh2pf5ublsne` (`categoria_id`),
  CONSTRAINT `FK35xlp590328eybh2pf5ublsne` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo` */

insert  into `articulo`(`id`,`habilitado`,`denominacion`,`es_catalogo`,`precio_de_venta`,`url_imagen`,`categoria_id`) values (1,'','Hamburguesa Chica','',250,'https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg',7),(2,'','Coca Cola 2L','',140,'https://supercom.es/792-large_default/coca-cola-2l.jpg',13),(3,'','Papas Fritas Chica','',60,'https://www.juliana-delivery.com.ar/uploads/products/detail_products_6406.png',17),(4,'','Harina 000','\0',0,NULL,22),(5,'','Tomates Perita','\0',0,NULL,26),(6,'','Salsa Preparada','\0',0,NULL,23),(7,'','Queso Cremoso','\0',0,NULL,21),(8,'','Papas','\0',0,NULL,26),(9,'','Aceite de Cocina','\0',0,NULL,20),(10,'','Lechuga','\0',0,NULL,26),(11,'','Pan de Hamburguesa','\0',0,NULL,27),(12,'','Medallon de Carne','\0',0,NULL,25),(13,'','Huevos de gallina','\0',0,NULL,24);

/*Table structure for table `articulo_insumo` */

DROP TABLE IF EXISTS `articulo_insumo`;

CREATE TABLE `articulo_insumo` (
  `precio_de_compra` double NOT NULL,
  `requiere_refrigeracion` bit(1) NOT NULL,
  `stock_actual` float NOT NULL,
  `stock_maximo` float NOT NULL,
  `stock_minimo` float NOT NULL,
  `articulo_insumo_id` bigint(20) NOT NULL,
  `unidad_medida_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`articulo_insumo_id`),
  KEY `FKsbryyhg26404nkn92n1rt0egh` (`unidad_medida_id`),
  CONSTRAINT `FK324krhfmjssirlc70n7rbibb0` FOREIGN KEY (`articulo_insumo_id`) REFERENCES `articulo` (`id`),
  CONSTRAINT `FKsbryyhg26404nkn92n1rt0egh` FOREIGN KEY (`unidad_medida_id`) REFERENCES `unidad_medida` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_insumo` */

insert  into `articulo_insumo`(`precio_de_compra`,`requiere_refrigeracion`,`stock_actual`,`stock_maximo`,`stock_minimo`,`articulo_insumo_id`,`unidad_medida_id`) values (60,'',10,15,4,2,1),(40,'\0',8,11,3,4,2),(28,'\0',5,8,2,5,2),(14,'',10,12,3,6,4),(140,'',18,20,3,7,2),(14,'\0',4,6,2,8,2),(80,'\0',4,6,2,9,4),(18,'\0',5,7,1,10,2),(8,'\0',50,60,14,11,1),(26,'',20,24,6,12,1),(8,'\0',60,70,15,13,1);

/*Table structure for table `articulo_manufacturado` */

DROP TABLE IF EXISTS `articulo_manufacturado`;

CREATE TABLE `articulo_manufacturado` (
  `tiempo_estimado_manuf` int(11) NOT NULL,
  `articulo_manufacturado_id` bigint(20) NOT NULL,
  PRIMARY KEY (`articulo_manufacturado_id`),
  CONSTRAINT `FKt42ndmhxsgmkfnc53oyiej826` FOREIGN KEY (`articulo_manufacturado_id`) REFERENCES `articulo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_manufacturado` */

insert  into `articulo_manufacturado`(`tiempo_estimado_manuf`,`articulo_manufacturado_id`) values (17,1),(22,3);

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `insumoomanuf` bit(1) NOT NULL,
  `nombre_categoria` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `padre_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK15fq6y2i5rupnborqxt745bo5` (`padre_id`),
  CONSTRAINT `FK15fq6y2i5rupnborqxt745bo5` FOREIGN KEY (`padre_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `categoria` */

insert  into `categoria`(`id`,`habilitado`,`insumoomanuf`,`nombre_categoria`,`padre_id`) values (1,'','','ProductoAVender',NULL),(2,'','','Hamburguesas',1),(3,'','','Pizzas',1),(4,'','','Empanadas',1),(5,'','','con Huevo',2),(6,'','','con Cheddar',2),(7,'','','Simple',2),(8,'','','Muzzarella',3),(9,'','','Especial',3),(10,'','','De Carne',4),(11,'','','De Pollo',4),(12,'','\0','InsumoAVender',NULL),(13,'','\0','Coca 2L',12),(14,'','\0','Coca 500ml',12),(15,'','\0','Sprite 2L',12),(16,'','','Papas Fritas',1),(17,'','','Simples',16),(18,'','','Con Huevo',16),(19,'','','Con Tocino',16),(20,'','\0','MateriaPrima',NULL),(21,'','\0','Quesos',20),(22,'','\0','Harinas',20),(23,'','\0','Salsas',20),(24,'','\0','Huevos',20),(25,'','\0','Carnes',20),(26,'','\0','Verduras',20),(27,'','\0','Planificados',20);

/*Table structure for table `cliente` */

DROP TABLE IF EXISTS `cliente`;

CREATE TABLE `cliente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `apellido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` bigint(20) NOT NULL,
  `domicilio_id` bigint(20) NOT NULL,
  `usuario_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_7ob9xg3niaibhhmj5iw311ygb` (`domicilio_id`),
  KEY `FKc3u631ocxdrtm3ccpme0kjlmu` (`usuario_id`),
  CONSTRAINT `FKc3u631ocxdrtm3ccpme0kjlmu` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FKhnfwgi8xk38mge49a8twpxtxv` FOREIGN KEY (`domicilio_id`) REFERENCES `domicilio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `cliente` */

insert  into `cliente`(`id`,`habilitado`,`apellido`,`nombre`,`telefono`,`domicilio_id`,`usuario_id`) values (2,'','Ramos','Matias',261626273,1,2);

/*Table structure for table `configuracion_general` */

DROP TABLE IF EXISTS `configuracion_general`;

CREATE TABLE `configuracion_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `cantidad_cocineros` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `configuracion_general` */

insert  into `configuracion_general`(`id`,`habilitado`,`cantidad_cocineros`,`email`) values (1,'',3,'empresa@sada.com');

/*Table structure for table `datos_empresa` */

DROP TABLE IF EXISTS `datos_empresa`;

CREATE TABLE `datos_empresa` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `propietario` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `razon_social` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` int(11) NOT NULL,
  `domicilio_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ieltcaqr5mieyfeb0bhn12wwe` (`domicilio_id`),
  CONSTRAINT `FK777dt8g718k2gjkebi7iyckb7` FOREIGN KEY (`domicilio_id`) REFERENCES `domicilio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `datos_empresa` */

insert  into `datos_empresa`(`id`,`habilitado`,`propietario`,`razon_social`,`telefono`,`domicilio_id`) values (3,'','Macri','Burguesia S.A',26125232,2);

/*Table structure for table `detalle_manufacturado` */

DROP TABLE IF EXISTS `detalle_manufacturado`;

CREATE TABLE `detalle_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `articulo_insumo_id` bigint(20) DEFAULT NULL,
  `unidad_medida_id` bigint(20) DEFAULT NULL,
  `articulo_manufacturado_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlxaquy4fbruw8bmys96uhnd3e` (`articulo_insumo_id`),
  KEY `FKgf267ubxe9d2ry22r26fifu56` (`unidad_medida_id`),
  KEY `FKsxa9qjxwd4p1k8ya1wsyqrlxn` (`articulo_manufacturado_id`),
  CONSTRAINT `FKgf267ubxe9d2ry22r26fifu56` FOREIGN KEY (`unidad_medida_id`) REFERENCES `unidad_medida` (`id`),
  CONSTRAINT `FKlxaquy4fbruw8bmys96uhnd3e` FOREIGN KEY (`articulo_insumo_id`) REFERENCES `articulo_insumo` (`articulo_insumo_id`),
  CONSTRAINT `FKsxa9qjxwd4p1k8ya1wsyqrlxn` FOREIGN KEY (`articulo_manufacturado_id`) REFERENCES `articulo_manufacturado` (`articulo_manufacturado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `detalle_manufacturado` */

insert  into `detalle_manufacturado`(`id`,`habilitado`,`cantidad`,`articulo_insumo_id`,`unidad_medida_id`,`articulo_manufacturado_id`) values (1,'',2,11,1,1),(2,'',100,10,3,1),(3,'',100,5,3,1),(4,'',50,7,3,1),(5,'',1,12,1,1),(6,'',100,9,5,3),(7,'',400,8,3,3);

/*Table structure for table `detalle_pedido` */

DROP TABLE IF EXISTS `detalle_pedido`;

CREATE TABLE `detalle_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `articulo_id` bigint(20) NOT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKblwfjfeyou4u7hae0gcngweeu` (`articulo_id`),
  KEY `FKgqvba9e7dildyw45u0usdj1k2` (`pedido_id`),
  CONSTRAINT `FKblwfjfeyou4u7hae0gcngweeu` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`),
  CONSTRAINT `FKgqvba9e7dildyw45u0usdj1k2` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `detalle_pedido` */

insert  into `detalle_pedido`(`id`,`habilitado`,`cantidad`,`articulo_id`,`pedido_id`) values (1,'',2,1,2),(2,'',1,2,2),(3,'',1,3,2);

/*Table structure for table `domicilio` */

DROP TABLE IF EXISTS `domicilio`;

CREATE TABLE `domicilio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `aclaracion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `calle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nro_departamento` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `piso` int(11) NOT NULL,
  `localidad_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8t63gx4v022qapv45vdwld71j` (`localidad_id`),
  CONSTRAINT `FK8t63gx4v022qapv45vdwld71j` FOREIGN KEY (`localidad_id`) REFERENCES `localidad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `domicilio` */

insert  into `domicilio`(`id`,`habilitado`,`aclaracion`,`calle`,`nro_departamento`,`numero`,`piso`,`localidad_id`) values (1,'','Porton de rejas','Bordin',0,126,0,1),(2,'','Donde esta el gato gordo en el balcon','San Martin',2,320,1,2),(3,'','Cerca de plaza de armas','La Wea',0,123,3,3);

/*Table structure for table `estado_pedido` */

DROP TABLE IF EXISTS `estado_pedido`;

CREATE TABLE `estado_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `nombre_estado` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `estado_pedido` */

insert  into `estado_pedido`(`id`,`habilitado`,`nombre_estado`) values (1,'','Pendiente'),(2,'','Cancelado'),(3,'','Confirmado'),(4,'','Preparando'),(5,'','En camino'),(6,'','Entregado'),(7,'','Listo'),(8,'','Facturado');

/*Table structure for table `factura` */

DROP TABLE IF EXISTS `factura`;

CREATE TABLE `factura` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `forma_pago` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nro_factura` int(11) NOT NULL,
  `precio_total` double NOT NULL,
  `tipo_factura` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_empresa_id` bigint(20) NOT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3t40tewmitdf9kg1n2fq3yfeq` (`datos_empresa_id`),
  KEY `FKn6q9mbkc0n4g1uux57clh2bq0` (`pedido_id`),
  CONSTRAINT `FK3t40tewmitdf9kg1n2fq3yfeq` FOREIGN KEY (`datos_empresa_id`) REFERENCES `datos_empresa` (`id`),
  CONSTRAINT `FKn6q9mbkc0n4g1uux57clh2bq0` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `factura` */

insert  into `factura`(`id`,`habilitado`,`fecha`,`forma_pago`,`nro_factura`,`precio_total`,`tipo_factura`,`datos_empresa_id`,`pedido_id`) values (1,'','2020-06-22','Contado',22,630,'A',3,2);

/*Table structure for table `horario_laboral` */

DROP TABLE IF EXISTS `horario_laboral`;

CREATE TABLE `horario_laboral` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `horario_fin` time DEFAULT NULL,
  `horario_inicio` time DEFAULT NULL,
  `nombre_dia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `configuracion_general_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoxbk5968v3rqdtc9xd2s9ox8l` (`configuracion_general_id`),
  CONSTRAINT `FKoxbk5968v3rqdtc9xd2s9ox8l` FOREIGN KEY (`configuracion_general_id`) REFERENCES `configuracion_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `horario_laboral` */

insert  into `horario_laboral`(`id`,`habilitado`,`horario_fin`,`horario_inicio`,`nombre_dia`,`configuracion_general_id`) values (1,'','23:59:59','20:00:00','Todos',1),(7,'','11:00:00','15:00:00','Sabados',1),(8,'','11:00:00','15:00:00','Domingos',1);

/*Table structure for table `localidad` */

DROP TABLE IF EXISTS `localidad`;

CREATE TABLE `localidad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `provincia_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK37mbpxuicwnbo878s9djjgr39` (`provincia_id`),
  CONSTRAINT `FK37mbpxuicwnbo878s9djjgr39` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `localidad` */

insert  into `localidad`(`id`,`habilitado`,`nombre`,`provincia_id`) values (1,'','Maipu',1),(2,'','Centro',2),(3,'','LocSan',3),(4,'','LocSan',4);

/*Table structure for table `pais` */

DROP TABLE IF EXISTS `pais`;

CREATE TABLE `pais` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `pais` */

insert  into `pais`(`id`,`habilitado`,`nombre`) values (1,'','Argentino'),(2,'','Chile');

/*Table structure for table `pedido` */

DROP TABLE IF EXISTS `pedido`;

CREATE TABLE `pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `fecha_realizacion` date DEFAULT NULL,
  `hora_estimada_fin` datetime DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `tipo_envio` bit(1) NOT NULL,
  `cliente_id` bigint(20) NOT NULL,
  `estado_pedido_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK30s8j2ktpay6of18lbyqn3632` (`cliente_id`),
  KEY `FKpapbin6tgk2j5es15ajwxfmv2` (`estado_pedido_id`),
  CONSTRAINT `FK30s8j2ktpay6of18lbyqn3632` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKpapbin6tgk2j5es15ajwxfmv2` FOREIGN KEY (`estado_pedido_id`) REFERENCES `estado_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `pedido` */

insert  into `pedido`(`id`,`habilitado`,`fecha_realizacion`,`hora_estimada_fin`,`numero`,`tipo_envio`,`cliente_id`,`estado_pedido_id`) values (2,'','2020-06-22','2020-06-22 18:31:46',22,'\0',2,4);

/*Table structure for table `provincia` */

DROP TABLE IF EXISTS `provincia`;

CREATE TABLE `provincia` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pais_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm4s599988w0v1q1nw6dyo5t2m` (`pais_id`),
  CONSTRAINT `FKm4s599988w0v1q1nw6dyo5t2m` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `provincia` */

insert  into `provincia`(`id`,`habilitado`,`nombre`,`pais_id`) values (1,'','Mendoza',1),(2,'','Cordoba',1),(3,'','Santiago de Chile',2),(4,'','Valparaiso',2);

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `nombre_rol` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rol` */

insert  into `rol`(`id`,`habilitado`,`nombre_rol`) values (1,'','Administrador'),(2,'','Cajero'),(3,'','Cocinero'),(4,'','Repartidor'),(5,'','Cliente');

/*Table structure for table `unidad_medida` */

DROP TABLE IF EXISTS `unidad_medida`;

CREATE TABLE `unidad_medida` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `abreviatura` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `equivalencia_kgol` double NOT NULL,
  `para_recetas` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `unidad_medida` */

insert  into `unidad_medida`(`id`,`habilitado`,`abreviatura`,`denominacion`,`equivalencia_kgol`,`para_recetas`) values (1,'','u','Unidad',1,'\0'),(2,'','Kg','Kilogramos',1,'\0'),(3,'','g','Gramos',0.001,'\0'),(4,'','L','Litros',1,'\0'),(5,'','ml','Mililitros',0.001,'\0'),(6,'','pizca','Pizca',0.004,''),(7,'','tapita','tapita',0.007,''),(8,'','cucharada','Cucharada',0.012,''),(9,'','taza','Taza',0.15,'');

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` bit(1) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uid_firebase` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rol_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKshkwj12wg6vkm6iuwhvcfpct8` (`rol_id`),
  CONSTRAINT `FKshkwj12wg6vkm6iuwhvcfpct8` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `usuario` */

insert  into `usuario`(`id`,`habilitado`,`email`,`uid_firebase`,`rol_id`) values (1,'','luis_asd@sdas','223',1),(2,'','luis_assad@asad.com','23',1),(3,'','murua99@ssfa.com','234',4),(4,'','moya@gasf.com','244',2),(5,'','moyaaaa@fsafa.com','2324',3),(6,'','ramos@sfacom','2423',5);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
