-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: blmsdb
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

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
-- Table structure for table `tblassignlocker`
--

DROP TABLE IF EXISTS `tblassignlocker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblassignlocker` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(250) DEFAULT NULL,
  `Firm` varchar(250) NOT NULL,
  `Address` mediumtext DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `MobileNumber` bigint(11) DEFAULT NULL,
  `haircolor` text NOT NULL,
  `eyecolor` text NOT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `LockerSize` varchar(10) DEFAULT NULL,
  `lockerprice1month` int(11) NOT NULL,
  `LockerNumber` int(10) DEFAULT NULL,
  `expiredateofLocker` date NOT NULL,
  `totalcostforrent` int(11) NOT NULL,
  `KeyNumber` int(10) DEFAULT NULL,
  `LockerAssigndate` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblassignlocker`
--

LOCK TABLES `tblassignlocker` WRITE;
/*!40000 ALTER TABLE `tblassignlocker` DISABLE KEYS */;
INSERT INTO `tblassignlocker` VALUES (31,'dfsa','fdsghh','sfdgdsf','shanisa49141@gmail.com',1625337883,'dfsg','sdfg',1280,4567,'35 * 21 ',1000,2,'2023-12-30',9000,2,'2023-03-29 20:50:02'),(32,'dsfg','sdfg','sdfg','isaahmedshan190138@gmail.com',4564564356,'dfgsdfsg','dgsfdsfg',123,234,'13 * 21 ',350,3,'2023-12-30',1400,3,'2023-03-29 20:50:24'),(33,'dfsads','asdfsdaf','asdf','isaahmedshan190138@gmail.com',1625337883,'dfsgfds','dfsgdfs',324,234,'13 * 21 ',350,4,'2023-06-30',1050,4,'2023-03-29 20:50:45');
/*!40000 ALTER TABLE `tblassignlocker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblbanker`
--

DROP TABLE IF EXISTS `tblbanker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblbanker` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AdminName` varchar(120) DEFAULT NULL,
  `AdminuserName` varchar(20) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Password` varchar(120) DEFAULT NULL,
  `AdminRegdate` timestamp NULL DEFAULT current_timestamp(),
  `UserType` int(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblbanker`
--

LOCK TABLES `tblbanker` WRITE;
/*!40000 ALTER TABLE `tblbanker` DISABLE KEYS */;
INSERT INTO `tblbanker` VALUES (2,'Md. Isa Ahamed Shan','admin',1625337883,'isaahmedshan190138@gmail.com','f925916e2754e5e03f75dd58a5733251','2022-11-29 18:30:00',1),(9,'isa ahmed shan','isaaaaa123',1625337883,'shanisa49141@gmail.com','f9c9110f6b31e7e6ee49ebbd41b51437','2023-03-25 21:15:26',0),(10,'Md. Isa Ahamed Shan','shan123',1625337883,'shanisa49141@gmail.com','f9c9110f6b31e7e6ee49ebbd41b51437','2023-03-25 21:16:00',0);
/*!40000 ALTER TABLE `tblbanker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbllockertype`
--

DROP TABLE IF EXISTS `tbllockertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbllockertype` (
  `ID` int(5) NOT NULL AUTO_INCREMENT,
  `SizeofLocker` varchar(50) DEFAULT NULL,
  `Priceoflocker` decimal(10,0) DEFAULT NULL,
  `CreationDate` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbllockertype`
--

LOCK TABLES `tbllockertype` WRITE;
/*!40000 ALTER TABLE `tbllockertype` DISABLE KEYS */;
INSERT INTO `tbllockertype` VALUES (12,'3 * 5',5,'2023-03-22 22:16:13'),(13,'5 * 5',25,'2023-03-22 22:16:13'),(14,'3 * 10',30,'2023-03-22 22:16:13'),(15,'5 * 10',40,'2023-03-22 22:16:13'),(16,'15 * 10',125,'2023-03-22 22:16:13'),(17,'13 * 21 ',350,'2023-03-22 22:16:13'),(18,'26 * 21 ',600,'2023-03-22 22:16:13'),(19,'35 * 21 ',1000,'2023-03-22 22:16:13');
/*!40000 ALTER TABLE `tbllockertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblpage`
--

DROP TABLE IF EXISTS `tblpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblpage` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `PageType` varchar(200) DEFAULT NULL,
  `PageTitle` mediumtext DEFAULT NULL,
  `PageDescription` mediumtext DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `UpdationDate` date DEFAULT NULL,
  `Timing` varchar(200) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblpage`
--

LOCK TABLES `tblpage` WRITE;
/*!40000 ALTER TABLE `tblpage` DISABLE KEYS */;
INSERT INTO `tblpage` VALUES (1,'aboutus','About Us','<div><font color=\"#202124\" face=\"arial, sans-serif\"><b>we understand the importance of keeping your valuable assets safe and secure</b></font></div><div><font color=\"#202124\" face=\"arial, sans-serif\"><b><br></b></font></div><div><font color=\"#202124\" face=\"arial, sans-serif\"><b>Our system uses the latest technology to provide real-time tracking of your safe deposit boxes.Our team is dedicated to providing the highest level of customer service and support. We\'re always available to answer any questions you may have and provide assistance whenever you need it. We take the security of your valuables seriously and will do everything we can to ensure their safety.</b></font></div>',NULL,NULL,NULL,''),(2,'contactus','Contact Us','N.L-92,Khalishpur,Khulna','SafeDepositTrackingSystem@gmail.com',7896541239,NULL,'9:00 am to 6:00 pm');
/*!40000 ALTER TABLE `tblpage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblreturnedboxlist`
--

DROP TABLE IF EXISTS `tblreturnedboxlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblreturnedboxlist` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `LockerNumber` int(10) NOT NULL,
  `KeyNumber` int(10) NOT NULL,
  `ReturnedDate` datetime NOT NULL DEFAULT current_timestamp(),
  `signature` varchar(250) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblreturnedboxlist`
--

LOCK TABLES `tblreturnedboxlist` WRITE;
/*!40000 ALTER TABLE `tblreturnedboxlist` DISABLE KEYS */;
INSERT INTO `tblreturnedboxlist` VALUES (7,'isa ahmedshan','isaahmedshan190138@gmail.com',1,1,'2023-04-02 16:30:46','d41d8cd98f00b204e9800998ecf8427e1680431446');
/*!40000 ALTER TABLE `tblreturnedboxlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblvisitlocker`
--

DROP TABLE IF EXISTS `tblvisitlocker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblvisitlocker` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `LockerNumber` int(11) NOT NULL,
  `KeyNumber` int(10) NOT NULL,
  `FullName` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `userpicture` varchar(250) NOT NULL,
  `signature` varchar(250) NOT NULL,
  `expiredateofLocker` varchar(250) NOT NULL,
  `visitDate` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblvisitlocker`
--

LOCK TABLES `tblvisitlocker` WRITE;
/*!40000 ALTER TABLE `tblvisitlocker` DISABLE KEYS */;
INSERT INTO `tblvisitlocker` VALUES (18,3,3,'dsfg','isaahmedshan190138@gmail.com','d41d8cd98f00b204e9800998ecf8427e1680223441','d41d8cd98f00b204e9800998ecf8427e1680223441','2023-09-30','2023-03-31 06:44:01'),(19,2,2,'dfsa','shanisa49141@gmail.com','d41d8cd98f00b204e9800998ecf8427e1680223504','d41d8cd98f00b204e9800998ecf8427e1680223504','2023-12-30','2023-03-31 06:45:04'),(20,3,3,'dsfg','isaahmedshan190138@gmail.com','d41d8cd98f00b204e9800998ecf8427e1680430457','d41d8cd98f00b204e9800998ecf8427e1680430457','2023-09-30','2023-04-02 16:14:17'),(21,555,555,'dsfasd','shanisa49141@gmail.com','d41d8cd98f00b204e9800998ecf8427e1680430480','d41d8cd98f00b204e9800998ecf8427e1680430480','2027-08-30','2023-04-02 16:14:40');
/*!40000 ALTER TABLE `tblvisitlocker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06 23:53:46
