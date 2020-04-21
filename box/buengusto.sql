/*
SQLyog Ultimate v9.63 
MySQL - 5.5.5-10.4.11-MariaDB : Database - buengusto
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`buengusto` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `buengusto`;

/*Table structure for table `articulo_insumo` */

DROP TABLE IF EXISTS `articulo_insumo`;

CREATE TABLE `articulo_insumo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `es_insumo` bit(1) NOT NULL,
  `precio_compra` double NOT NULL,
  `precio_venta` double NOT NULL,
  `stock_actual` double NOT NULL,
  `stock_minimo` double NOT NULL,
  `unidad_medida` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `articulo_insumo_fk_rubro_articulo` bigint(20) DEFAULT NULL,
  `_url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKioeo27kjtbxwlegq113icgm88` (`articulo_insumo_fk_rubro_articulo`),
  CONSTRAINT `FKioeo27kjtbxwlegq113icgm88` FOREIGN KEY (`articulo_insumo_fk_rubro_articulo`) REFERENCES `rubro_articulo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_insumo` */

insert  into `articulo_insumo`(`id`,`denominacion`,`es_insumo`,`precio_compra`,`precio_venta`,`stock_actual`,`stock_minimo`,`unidad_medida`,`articulo_insumo_fk_rubro_articulo`,`_url_imagen`) values (1,'pizza','',100,300,10,5,'kg',1,'asdasd');

/*Table structure for table `articulo_manufacturado` */

DROP TABLE IF EXISTS `articulo_manufacturado`;

CREATE TABLE `articulo_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `precio_venta` double NOT NULL,
  `tiempo_estimado_cocina` int(11) NOT NULL,
  `articulo_manufacturado_fk_rubro_general` bigint(20) DEFAULT NULL,
  `_url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt1q2wt5t8xee0l9fpif4slo2x` (`articulo_manufacturado_fk_rubro_general`),
  CONSTRAINT `FKt1q2wt5t8xee0l9fpif4slo2x` FOREIGN KEY (`articulo_manufacturado_fk_rubro_general`) REFERENCES `rubro_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_manufacturado` */

insert  into `articulo_manufacturado`(`id`,`denominacion`,`precio_venta`,`tiempo_estimado_cocina`,`articulo_manufacturado_fk_rubro_general`,`_url_imagen`) values (1,'Pizza Calabresa',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(2,'Pizza Especial ',300,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(3,'Lomo completo ',400,20,3,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(4,'Piza con cebolla',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(6,'Pizza Calabresa',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(7,'Pizza Calabresa',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(8,'Pizza Especial ',300,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(9,'Lomo completo ',400,20,3,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(10,'Piza con cebolla',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(11,'Pizza Calabresa',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(12,'Piza con cebolla',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(13,'Lomo completo ',400,20,3,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'),(14,'Piza con cebolla',350,15,1,'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg');

/*Table structure for table `articulo_manufacturado_detalle` */

DROP TABLE IF EXISTS `articulo_manufacturado_detalle`;

CREATE TABLE `articulo_manufacturado_detalle` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad` double NOT NULL,
  `unidad_medida` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `articulo_manufacturado_detalle_fk_articulo_insumo` bigint(20) DEFAULT NULL,
  `articulo_manufacturado_detalle_fk_articulo_manufacturado` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqkywjkobpm3qeubblbk1jpkky` (`articulo_manufacturado_detalle_fk_articulo_insumo`),
  KEY `FK2suyw7o2otxq792x40op49ph` (`articulo_manufacturado_detalle_fk_articulo_manufacturado`),
  CONSTRAINT `FK2suyw7o2otxq792x40op49ph` FOREIGN KEY (`articulo_manufacturado_detalle_fk_articulo_manufacturado`) REFERENCES `articulo_manufacturado` (`id`),
  CONSTRAINT `FKqkywjkobpm3qeubblbk1jpkky` FOREIGN KEY (`articulo_manufacturado_detalle_fk_articulo_insumo`) REFERENCES `articulo_insumo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_manufacturado_detalle` */

insert  into `articulo_manufacturado_detalle`(`id`,`cantidad`,`unidad_medida`,`articulo_manufacturado_detalle_fk_articulo_insumo`,`articulo_manufacturado_detalle_fk_articulo_manufacturado`) values (3,10,'kg',1,2);

/*Table structure for table `cliente` */

DROP TABLE IF EXISTS `cliente`;

CREATE TABLE `cliente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` bigint(20) NOT NULL,
  `uid_firebase` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fk_domicilio` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKraj5dyt7g3b7b9dj5o6aha8j8` (`fk_domicilio`),
  CONSTRAINT `FKraj5dyt7g3b7b9dj5o6aha8j8` FOREIGN KEY (`fk_domicilio`) REFERENCES `domicilio` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `cliente` */

/*Table structure for table `configuracion_general` */

DROP TABLE IF EXISTS `configuracion_general`;

CREATE TABLE `configuracion_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad_cocineros` int(11) NOT NULL,
  `email_empresa` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `configuracion_general` */

/*Table structure for table `detalle_pedido` */

DROP TABLE IF EXISTS `detalle_pedido`;

CREATE TABLE `detalle_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `subtotal` double NOT NULL,
  `detalle_pedido_fk_articulo_insumo` bigint(20) DEFAULT NULL,
  `detalle_pedido_fk_articulo_manufacturado` bigint(20) DEFAULT NULL,
  `factura_id` bigint(20) DEFAULT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh6e9fij4ah1y1gj28ecyx0s48` (`detalle_pedido_fk_articulo_insumo`),
  KEY `FKjebi9puq42o2f30vftddb5jqd` (`detalle_pedido_fk_articulo_manufacturado`),
  KEY `FKbarrsfk3nha7x59e11t5cxvy3` (`factura_id`),
  KEY `FKgqvba9e7dildyw45u0usdj1k2` (`pedido_id`),
  CONSTRAINT `FKbarrsfk3nha7x59e11t5cxvy3` FOREIGN KEY (`factura_id`) REFERENCES `factura` (`id`),
  CONSTRAINT `FKgqvba9e7dildyw45u0usdj1k2` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  CONSTRAINT `FKh6e9fij4ah1y1gj28ecyx0s48` FOREIGN KEY (`detalle_pedido_fk_articulo_insumo`) REFERENCES `articulo_insumo` (`id`),
  CONSTRAINT `FKjebi9puq42o2f30vftddb5jqd` FOREIGN KEY (`detalle_pedido_fk_articulo_manufacturado`) REFERENCES `articulo_manufacturado` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `detalle_pedido` */

/*Table structure for table `domicilio` */

DROP TABLE IF EXISTS `domicilio`;

CREATE TABLE `domicilio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `calle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `localidad` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `numero` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `domicilio` */

/*Table structure for table `factura` */

DROP TABLE IF EXISTS `factura`;

CREATE TABLE `factura` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `forma_pago` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `monto_descuento` double NOT NULL,
  `nro_tarjeta` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `número` int(11) NOT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `factura` */

/*Table structure for table `pedido` */

DROP TABLE IF EXISTS `pedido`;

CREATE TABLE `pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `estado` int(11) NOT NULL,
  `fecha` int(11) NOT NULL,
  `hora_estimada_fin` datetime DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `tipo_envio` int(11) NOT NULL,
  `cliente_id` bigint(20) DEFAULT NULL,
  `factura_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK30s8j2ktpay6of18lbyqn3632` (`cliente_id`),
  KEY `FKpa5hywhn7so5bn1ctm1yhwuei` (`factura_id`),
  CONSTRAINT `FK30s8j2ktpay6of18lbyqn3632` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKpa5hywhn7so5bn1ctm1yhwuei` FOREIGN KEY (`factura_id`) REFERENCES `factura` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `pedido` */

/*Table structure for table `rubro_articulo` */

DROP TABLE IF EXISTS `rubro_articulo`;

CREATE TABLE `rubro_articulo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `padre_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK26mkwghtyj4na9j258cpsrft1` (`padre_id`),
  CONSTRAINT `FK26mkwghtyj4na9j258cpsrft1` FOREIGN KEY (`padre_id`) REFERENCES `rubro_articulo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rubro_articulo` */

insert  into `rubro_articulo`(`id`,`denominacion`,`padre_id`) values (1,'1111',NULL);

/*Table structure for table `rubro_general` */

DROP TABLE IF EXISTS `rubro_general`;

CREATE TABLE `rubro_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rubro_general` */

insert  into `rubro_general`(`id`,`denominacion`) values (1,'Pizza'),(2,'Empanadas'),(3,'Lomos'),(4,'Panchos');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
