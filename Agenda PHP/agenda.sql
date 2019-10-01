-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-10-2019 a las 23:45:02
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `Id_Agenda` int(11) UNSIGNED NOT NULL,
  `Titulo` varchar(255) COLLATE utf8_bin NOT NULL,
  `Fecha_Inicio` date NOT NULL,
  `Hora_Inicio` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `Fecha_Fin` date DEFAULT NULL,
  `Hora_Fin` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `Dia_Completo` tinyint(1) NOT NULL,
  `Fk_Usuario` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`Id_Agenda`, `Titulo`, `Fecha_Inicio`, `Hora_Inicio`, `Fecha_Fin`, `Hora_Fin`, `Dia_Completo`, `Fk_Usuario`) VALUES
(32, 'Primer Evento Dia Completo', '2019-10-02', '', '0000-00-00', '', 1, 1),
(33, 'Dia parcial', '2019-10-09', '07:00:00', '2019-10-11', '05:00:00', 0, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`Id_Agenda`),
  ADD KEY `Usuario-Agenda` (`Fk_Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `Id_Agenda` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `Usuario-Agenda` FOREIGN KEY (`Fk_Usuario`) REFERENCES `usuarios` (`Id_Usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
