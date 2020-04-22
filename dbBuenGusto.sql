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
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `precioventa` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo` */

insert  into `articulo`(`id`,`denominacion`,`precioventa`) values (1,'PizzaM',330),(2,'EmpanC',260),(3,'CocaCola',110),(4,'Prepizzas',40),(5,'Queso Roquefor',120);

/*Table structure for table `articulo_insumo` */

DROP TABLE IF EXISTS `articulo_insumo`;

CREATE TABLE `articulo_insumo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `_url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `precio_compra` double NOT NULL,
  `stock_actual` double NOT NULL,
  `stock_minimo` double NOT NULL,
  `unidad_medida` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `articulo_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq1c8qhf52n11calo0xtmx4nx1` (`articulo_id`),
  CONSTRAINT `FKq1c8qhf52n11calo0xtmx4nx1` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_insumo` */

insert  into `articulo_insumo`(`id`,`_url_imagen`,`denominacion`,`precio_compra`,`stock_actual`,`stock_minimo`,`unidad_medida`,`articulo_id`) values (1,'1232','Cocacola',70,20,5,'unidad',3),(2,'2332','Prepizza',40,70,5,'unidad',4),(3,'2243','Queso Roquefor',150,30000,4000,'miligramo',5);

/*Table structure for table `articulo_manufacturado` */

DROP TABLE IF EXISTS `articulo_manufacturado`;

CREATE TABLE `articulo_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `_url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tiempo_estimado_cocina` int(11) NOT NULL,
  `articulo_id` bigint(20) DEFAULT NULL,
  `receta_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2y7l08sb6n5vwm73e2bo3fh49` (`articulo_id`),
  KEY `FKhn0dpc6wc6se3gtk98smmxvc2` (`receta_id`),
  CONSTRAINT `FK2y7l08sb6n5vwm73e2bo3fh49` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`),
  CONSTRAINT `FKhn0dpc6wc6se3gtk98smmxvc2` FOREIGN KEY (`receta_id`) REFERENCES `receta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_manufacturado` */

insert  into `articulo_manufacturado`(`id`,`_url_imagen`,`tiempo_estimado_cocina`,`articulo_id`,`receta_id`) values (1,'as',30,1,1),(2,'sa',25,2,2);

/*Table structure for table `articulo_rubro` */

DROP TABLE IF EXISTS `articulo_rubro`;

CREATE TABLE `articulo_rubro` (
  `articulo_id` bigint(20) NOT NULL,
  `rubro_id` bigint(20) NOT NULL,
  KEY `FKpc0xb810kuxoi3bqbow779kkw` (`rubro_id`),
  KEY `FKpnitqvxi2fmbnfkflyecexsmr` (`articulo_id`),
  CONSTRAINT `FKpc0xb810kuxoi3bqbow779kkw` FOREIGN KEY (`rubro_id`) REFERENCES `rubro_general` (`id`),
  CONSTRAINT `FKpnitqvxi2fmbnfkflyecexsmr` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `articulo_rubro` */

insert  into `articulo_rubro`(`articulo_id`,`rubro_id`) values (1,1),(1,2);

/*Table structure for table `cliente` */

DROP TABLE IF EXISTS `cliente`;

CREATE TABLE `cliente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` bigint(20) NOT NULL,
  `uid_firebase` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rol_cliente` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKso8kx46mkwf3j4hsetoy0r4ec` (`rol_cliente`),
  CONSTRAINT `FKso8kx46mkwf3j4hsetoy0r4ec` FOREIGN KEY (`rol_cliente`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `cliente` */

insert  into `cliente`(`id`,`apellido`,`email`,`nombre`,`telefono`,`uid_firebase`,`rol_cliente`) values (1,'Aruta','asas','Luis',334,'33434',1),(2,'Moy','asa','Al',2332,'2332',4);

/*Table structure for table `configuracion_general` */

DROP TABLE IF EXISTS `configuracion_general`;

CREATE TABLE `configuracion_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad_cocineros` int(11) NOT NULL,
  `email_empresa` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `configuracion_general` */

insert  into `configuracion_general`(`id`,`cantidad_cocineros`,`email_empresa`) values (1,2,'email@algo');

/*Table structure for table `detalle_pedido` */

DROP TABLE IF EXISTS `detalle_pedido`;

CREATE TABLE `detalle_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `subtotal` double NOT NULL,
  `articulo_id` bigint(20) DEFAULT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKblwfjfeyou4u7hae0gcngweeu` (`articulo_id`),
  KEY `FKgqvba9e7dildyw45u0usdj1k2` (`pedido_id`),
  CONSTRAINT `FKblwfjfeyou4u7hae0gcngweeu` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`),
  CONSTRAINT `FKgqvba9e7dildyw45u0usdj1k2` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `detalle_pedido` */

insert  into `detalle_pedido`(`id`,`cantidad`,`subtotal`,`articulo_id`,`pedido_id`) values (1,1,330,1,1),(2,1,270,2,1);

/*Table structure for table `domicilio` */

DROP TABLE IF EXISTS `domicilio`;

CREATE TABLE `domicilio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `calle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `localidad` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `cliente_fk_domicilio` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrvjp4cqj56d0q7yjeqjq2twij` (`cliente_fk_domicilio`),
  CONSTRAINT `FKrvjp4cqj56d0q7yjeqjq2twij` FOREIGN KEY (`cliente_fk_domicilio`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `domicilio` */

insert  into `domicilio`(`id`,`calle`,`localidad`,`numero`,`cliente_fk_domicilio`) values (1,'Bordin','Maipu',123,1),(2,'Miguel Cane','Maipu',125,1);

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
  `pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn6q9mbkc0n4g1uux57clh2bq0` (`pedido_id`),
  CONSTRAINT `FKn6q9mbkc0n4g1uux57clh2bq0` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `factura` */

insert  into `factura`(`id`,`fecha`,`forma_pago`,`monto_descuento`,`nro_tarjeta`,`número`,`total`,`pedido_id`) values (1,'2020-04-23 15:29:54','tarjetaC',0,'2324223323',232323,600,1);

/*Table structure for table `horario_laboral` */

DROP TABLE IF EXISTS `horario_laboral`;

CREATE TABLE `horario_laboral` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `horario_fin` int(11) NOT NULL,
  `horario_inicio` int(11) NOT NULL,
  `nombre_horario_laboral` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `horario_fk_configuracion` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3jxbjlifwklkwpd35oyx7n8k1` (`horario_fk_configuracion`),
  CONSTRAINT `FK3jxbjlifwklkwpd35oyx7n8k1` FOREIGN KEY (`horario_fk_configuracion`) REFERENCES `configuracion_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `horario_laboral` */

insert  into `horario_laboral`(`id`,`horario_fin`,`horario_inicio`,`nombre_horario_laboral`,`horario_fk_configuracion`) values (1,2200,800,'LunesaViernes',1),(2,1400,800,'Sabado',1),(3,1200,800,'DomingoyFeriado',1);

/*Table structure for table `pedido` */

DROP TABLE IF EXISTS `pedido`;

CREATE TABLE `pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `estado` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `hora_estimada_fin` datetime DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `tipo_envio` int(11) NOT NULL,
  `cliente_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK30s8j2ktpay6of18lbyqn3632` (`cliente_id`),
  CONSTRAINT `FK30s8j2ktpay6of18lbyqn3632` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `pedido` */

insert  into `pedido`(`id`,`estado`,`fecha`,`hora_estimada_fin`,`numero`,`tipo_envio`,`cliente_id`) values (1,0,'2020-04-22 15:27:31','2020-04-22 16:27:35',23232,2,1);

/*Table structure for table `receta` */

DROP TABLE IF EXISTS `receta`;

CREATE TABLE `receta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha_de_alta` datetime DEFAULT NULL,
  `nombre_receta` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `receta` */

insert  into `receta`(`id`,`fecha_de_alta`,`nombre_receta`) values (1,'2020-04-22 15:00:37','Pizza de Muzzarella'),(2,'2020-04-22 15:09:55','Empanadas de Carne');

/*Table structure for table `receta_detalle` */

DROP TABLE IF EXISTS `receta_detalle`;

CREATE TABLE `receta_detalle` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad` double NOT NULL,
  `unidad_medida` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `articulo_id` bigint(20) DEFAULT NULL,
  `receta_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3w4309v0h7y1tbj31tusi55qr` (`articulo_id`),
  KEY `FK3ymmbjgelr0kjbhi7880bmmk3` (`receta_id`),
  CONSTRAINT `FK3w4309v0h7y1tbj31tusi55qr` FOREIGN KEY (`articulo_id`) REFERENCES `articulo_insumo` (`id`),
  CONSTRAINT `FK3ymmbjgelr0kjbhi7880bmmk3` FOREIGN KEY (`receta_id`) REFERENCES `receta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `receta_detalle` */

insert  into `receta_detalle`(`id`,`cantidad`,`unidad_medida`,`articulo_id`,`receta_id`) values (1,1,'unidad',2,1),(2,300,'miligramo',3,1);

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre_rol` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rol` */

insert  into `rol`(`id`,`descripcion`,`nombre_rol`) values (1,'Cliente','Cliente'),(2,'Cocinero','Cocinero'),(3,'Cajero','Cajero'),(4,'Administrador','Administrador');

/*Table structure for table `rubro_general` */

DROP TABLE IF EXISTS `rubro_general`;

CREATE TABLE `rubro_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rubro_padre_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7kkksyp9o4vhysok3ehylepmr` (`rubro_padre_id`),
  CONSTRAINT `FK7kkksyp9o4vhysok3ehylepmr` FOREIGN KEY (`rubro_padre_id`) REFERENCES `rubro_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `rubro_general` */

insert  into `rubro_general`(`id`,`denominacion`,`rubro_padre_id`) values (1,'Producto Final',NULL),(2,'Pizza',1),(3,'Empanadas',1),(4,'Lomos',1),(5,'Lacteos',NULL),(6,'Quesos',5),(7,'Leche',5),(8,'Verdura',NULL),(9,'Tomate',8),(10,'Lechuga',8);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
