-- MySQL dump 10.13  Distrib 5.6.37, for Linux (x86_64)
--
-- Host: localhost    Database: buenGusto
-- ------------------------------------------------------
-- Server version	5.6.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulo_insumo`
--

DROP TABLE IF EXISTS `articulo_insumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articulo_insumo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulo_insumo`
--

LOCK TABLES `articulo_insumo` WRITE;
/*!40000 ALTER TABLE `articulo_insumo` DISABLE KEYS */;
INSERT INTO `articulo_insumo` VALUES (1,1,'Coca Cola 2L','',70,140,'',6,14,3,'https://www.pikfly.com/images/products/50/13882.jpg',2,1),(2,1,'Pan de Hamburguesas','\0',8,0,'\0',60,100,30,NULL,19,1),(3,1,'Medallon de Carne','\0',20,0,'',30,40,15,NULL,15,1),(4,1,'Lechuga','\0',35,0,'\0',15,22,8,NULL,9,2),(5,1,'Papas','\0',25,0,'\0',8,12,4,NULL,8,2),(6,1,'Aceite el Cocinero','\0',80,0,'\0',10,12,5,NULL,33,4),(7,1,'Sal Dos Anclas','\0',40,0,'\0',3,4,2,NULL,35,2),(8,1,'Queso Barra La Serenisima','\0',230,0,'',6,7,3,NULL,24,2);
/*!40000 ALTER TABLE `articulo_insumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulo_manufacturado`
--

DROP TABLE IF EXISTS `articulo_manufacturado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articulo_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `precio_de_venta` double NOT NULL,
  `tiempo_estimado_manuf` int(11) NOT NULL,
  `url_imagen` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rubro_general_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7dkm6gp2wbtpugm9plyohvnn` (`rubro_general_id`),
  CONSTRAINT `FK7dkm6gp2wbtpugm9plyohvnn` FOREIGN KEY (`rubro_general_id`) REFERENCES `rubro_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulo_manufacturado`
--

LOCK TABLES `articulo_manufacturado` WRITE;
/*!40000 ALTER TABLE `articulo_manufacturado` DISABLE KEYS */;
INSERT INTO `articulo_manufacturado` VALUES (1,1,'Hamburguesa con Queso',250,20,'https://www.freejpg.com.ar/asset/900/98/9817/F100009127.jpg',1),(2,1,'Papas Simples',60,18,'https://www.cocinayvino.com/wp-content/uploads/2017/04/30635150_l.jpg',5);
/*!40000 ALTER TABLE `articulo_manufacturado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `es_categoria_catalogo` bit(1) NOT NULL,
  `nombre_categoria` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `padre_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK15fq6y2i5rupnborqxt745bo5` (`padre_id`),
  CONSTRAINT `FK15fq6y2i5rupnborqxt745bo5` FOREIGN KEY (`padre_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,1,'','Bebidas',NULL),(2,1,'','Sin Alcohol',1),(3,1,'','Con Alcohol',1),(4,1,'','Postres',NULL),(5,1,'','Franes',4),(6,1,'','Helados',4),(7,1,'','Ensalada de Fruta',4),(8,1,'\0','FrutasyVerduras',NULL),(9,1,'\0','Lechuga',8),(10,1,'\0','Tomate',8),(11,1,'\0','Rucula',8),(12,1,'\0','Anana',8),(13,1,'\0','Carnes',NULL),(14,1,'\0','Pollo',13),(15,1,'\0','Vaca',13),(16,1,'\0','Cerdo',13),(17,1,'\0','Panificados',NULL),(18,1,'\0','de Mesa',17),(19,1,'\0','de Hamburguesas',17),(20,1,'\0','de Lomos',17),(21,1,'\0','Prepizzas',17),(22,1,'\0','Lacteos y Huevos',NULL),(23,1,'\0','Leche de Vaca',22),(24,1,'\0','Quesos',22),(25,1,'\0','Huevos de gallina',22),(26,1,'\0','Aderezos',NULL),(27,1,'\0','Ketchup',26),(28,1,'\0','Mostaza',26),(29,1,'\0','Mayonesa',26),(30,1,'\0','Salsa Golf',26),(31,1,'\0','Insumos Varios',NULL),(32,1,'\0','Harinas',31),(33,1,'\0','Aceite de Cocina',31),(34,1,'\0','Vinagre',31),(35,1,'\0','Sal',31);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (2,1,'Ramos','Matias',261626273,1,2),(3,1,'Ramiro','Bes',2334242,2,3),(4,1,'Ramos','Matias',261626273,4,4);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracion_general`
--

DROP TABLE IF EXISTS `configuracion_general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configuracion_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `cantidad_cocineros` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracion_general`
--

LOCK TABLES `configuracion_general` WRITE;
/*!40000 ALTER TABLE `configuracion_general` DISABLE KEYS */;
INSERT INTO `configuracion_general` VALUES (1,1,3,'empresa@sada.com');
/*!40000 ALTER TABLE `configuracion_general` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datos_empresa`
--

DROP TABLE IF EXISTS `datos_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datos_empresa` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `propietario` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `razon_social` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` int(11) NOT NULL,
  `domicilio_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ieltcaqr5mieyfeb0bhn12wwe` (`domicilio_id`),
  CONSTRAINT `FK777dt8g718k2gjkebi7iyckb7` FOREIGN KEY (`domicilio_id`) REFERENCES `domicilio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos_empresa`
--

LOCK TABLES `datos_empresa` WRITE;
/*!40000 ALTER TABLE `datos_empresa` DISABLE KEYS */;
INSERT INTO `datos_empresa` VALUES (3,1,'Macri','Burguesia S.A',26125232,2);
/*!40000 ALTER TABLE `datos_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_manufacturado`
--

DROP TABLE IF EXISTS `detalle_manufacturado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalle_manufacturado` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_manufacturado`
--

LOCK TABLES `detalle_manufacturado` WRITE;
/*!40000 ALTER TABLE `detalle_manufacturado` DISABLE KEYS */;
INSERT INTO `detalle_manufacturado` VALUES (1,1,2,2,1,1),(2,1,2,3,1,1),(3,1,200,4,3,1),(4,1,150,8,3,1),(5,1,400,5,3,2),(6,1,100,6,5,2),(7,1,3,7,6,2);
/*!40000 ALTER TABLE `detalle_manufacturado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_pedido`
--

DROP TABLE IF EXISTS `detalle_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalle_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_pedido`
--

LOCK TABLES `detalle_pedido` WRITE;
/*!40000 ALTER TABLE `detalle_pedido` DISABLE KEYS */;
INSERT INTO `detalle_pedido` VALUES (1,1,NULL,2,'\0',500,NULL,1,1),(2,1,NULL,1,'\0',60,NULL,2,1),(3,1,NULL,1,'',140,1,NULL,1),(4,1,'Sin queso',1,'\0',250,NULL,1,2),(5,1,NULL,1,'',140,1,NULL,2);
/*!40000 ALTER TABLE `detalle_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicilio`
--

DROP TABLE IF EXISTS `domicilio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domicilio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `aclaracion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `calle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nro_departamento` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `piso` int(11) NOT NULL,
  `localidad_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8t63gx4v022qapv45vdwld71j` (`localidad_id`),
  CONSTRAINT `FK8t63gx4v022qapv45vdwld71j` FOREIGN KEY (`localidad_id`) REFERENCES `localidad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicilio`
--

LOCK TABLES `domicilio` WRITE;
/*!40000 ALTER TABLE `domicilio` DISABLE KEYS */;
INSERT INTO `domicilio` VALUES (1,1,'Porton de rejas','Bordin',0,126,0,1),(2,1,'Donde esta el gato gordo en el balcon','San Martin',2,320,1,2),(3,1,'Cerca de plaza de armas','La Wea',0,123,3,3),(4,1,'Porton de rejas','Bordin',0,126,0,4);
/*!40000 ALTER TABLE `domicilio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_pedido`
--

DROP TABLE IF EXISTS `estado_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado_pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `nombre_estado` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_pedido`
--

LOCK TABLES `estado_pedido` WRITE;
/*!40000 ALTER TABLE `estado_pedido` DISABLE KEYS */;
INSERT INTO `estado_pedido` VALUES (1,1,'Pendiente'),(2,1,'Cancelado'),(3,1,'Confirmado'),(4,1,'Preparando'),(5,1,'En camino'),(6,1,'Entregado');
/*!40000 ALTER TABLE `estado_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factura` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
INSERT INTO `factura` VALUES (1,1,NULL,'Contado',10,2234,NULL,'C',630,3,1),(2,1,NULL,'Tarjeta',0,2235,'2322-2344-2311-5728','C',390,3,2);
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario_laboral`
--

DROP TABLE IF EXISTS `horario_laboral`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario_laboral` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `horario_fin` time DEFAULT NULL,
  `horario_inicio` time DEFAULT NULL,
  `nombre_dia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `configuracion_general_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoxbk5968v3rqdtc9xd2s9ox8l` (`configuracion_general_id`),
  CONSTRAINT `FKoxbk5968v3rqdtc9xd2s9ox8l` FOREIGN KEY (`configuracion_general_id`) REFERENCES `configuracion_general` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario_laboral`
--

LOCK TABLES `horario_laboral` WRITE;
/*!40000 ALTER TABLE `horario_laboral` DISABLE KEYS */;
INSERT INTO `horario_laboral` VALUES (1,1,'02:59:59','23:00:00','Lunes',1),(7,1,'18:00:00','14:00:00','Sabados',1),(8,1,'18:00:00','14:00:00','Domingos',1);
/*!40000 ALTER TABLE `horario_laboral` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localidad`
--

DROP TABLE IF EXISTS `localidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localidad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `provincia_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK37mbpxuicwnbo878s9djjgr39` (`provincia_id`),
  CONSTRAINT `FK37mbpxuicwnbo878s9djjgr39` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidad`
--

LOCK TABLES `localidad` WRITE;
/*!40000 ALTER TABLE `localidad` DISABLE KEYS */;
INSERT INTO `localidad` VALUES (1,1,'Maipu',1),(2,1,'Centro',2),(3,1,'LocSan',3),(4,1,'LocSan',4);
/*!40000 ALTER TABLE `localidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pais` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,1,'Argentino'),(2,1,'Chile');
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `fecha_realizacion` datetime DEFAULT NULL,
  `hora_estimada_fin` datetime DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `tipo_envio` bit(1) NOT NULL,
  `cliente_id` bigint(20) DEFAULT NULL,
  `estado_pedido_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK30s8j2ktpay6of18lbyqn3632` (`cliente_id`),
  KEY `FKpapbin6tgk2j5es15ajwxfmv2` (`estado_pedido_id`),
  CONSTRAINT `FK30s8j2ktpay6of18lbyqn3632` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKpapbin6tgk2j5es15ajwxfmv2` FOREIGN KEY (`estado_pedido_id`) REFERENCES `estado_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,1,'2020-06-27 18:36:17','2020-06-27 18:56:20',23,'\0',2,1),(2,1,'2020-06-26 18:36:29','2020-06-26 19:36:33',24,'',2,5);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincia` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pais_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm4s599988w0v1q1nw6dyo5t2m` (`pais_id`),
  CONSTRAINT `FKm4s599988w0v1q1nw6dyo5t2m` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
INSERT INTO `provincia` VALUES (1,1,'Mendoza',1),(2,1,'Cordoba',1),(3,1,'Santiago de Chile',2),(4,1,'Valparaiso',2);
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `nombre_rol` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,1,'Administrador'),(2,1,'Cajero'),(3,1,'Cocinero'),(4,1,'Repartidor'),(5,1,'Cliente');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rubro_general`
--

DROP TABLE IF EXISTS `rubro_general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rubro_general` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rubro_general`
--

LOCK TABLES `rubro_general` WRITE;
/*!40000 ALTER TABLE `rubro_general` DISABLE KEYS */;
INSERT INTO `rubro_general` VALUES (1,1,'Hamburguesas'),(2,1,'Pizzas'),(3,1,'Empanadas'),(4,1,'Lomos'),(5,1,'Papas Fritas');
/*!40000 ALTER TABLE `rubro_general` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidad_medida`
--

DROP TABLE IF EXISTS `unidad_medida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unidad_medida` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `abreviatura` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `denominacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `equivalencia_kgol` double NOT NULL,
  `para_recetas` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidad_medida`
--

LOCK TABLES `unidad_medida` WRITE;
/*!40000 ALTER TABLE `unidad_medida` DISABLE KEYS */;
INSERT INTO `unidad_medida` VALUES (1,1,'u','Unidad',1,'\0'),(2,1,'Kg','Kilogramos',1,'\0'),(3,1,'g','Gramos',0.001,'\0'),(4,1,'L','Litros',1,'\0'),(5,1,'ml','Mililitros',0.001,'\0'),(6,1,'pizca','Pizca',0.004,''),(7,1,'tapita','tapita',0.007,''),(8,1,'cucharada','Cucharada',0.012,''),(9,1,'taza','Taza',0.15,'');
/*!40000 ALTER TABLE `unidad_medida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `habilitado` tinyint(1) DEFAULT '1',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uid_firebase` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rol_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKshkwj12wg6vkm6iuwhvcfpct8` (`rol_id`),
  CONSTRAINT `FKshkwj12wg6vkm6iuwhvcfpct8` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,1,'luis_asd@sdas','223',1),(2,1,'luis_assad@asad.com','23',1),(3,0,'murua99@ssfa.com','234',4),(4,1,'moya@gasf.com','244',2),(5,1,'moyaaaa@fsafa.com','2324',3),(6,1,'ramos@sfacom','2423',5);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'buenGusto'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-27 22:53:55
