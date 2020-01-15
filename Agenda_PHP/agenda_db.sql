-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-01-2020 a las 03:56:07
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

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
  `Id_Agenda` int(11) NOT NULL,
  `Titulo` varchar(255) COLLATE utf8_bin NOT NULL,
  `Fecha_Inicio` varchar(50) COLLATE utf8_bin NOT NULL,
  `Fecha_Fin` varchar(50) COLLATE utf8_bin NOT NULL,
  `Hora_Inicio` varchar(50) COLLATE utf8_bin NOT NULL,
  `Hora_Fin` varchar(50) COLLATE utf8_bin NOT NULL,
  `Fk_Usuario` int(11) NOT NULL,
  `Dia_Completo` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`Id_Agenda`, `Titulo`, `Fecha_Inicio`, `Fecha_Fin`, `Hora_Inicio`, `Hora_Fin`, `Fk_Usuario`, `Dia_Completo`) VALUES
(1, 'evento de un dia', '2020-01-08', '', '', '', 2, 1),
(2, 'evento de mas de un dia', '2020-01-14', '2020-01-15', '07:00', '09:00', 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_Usuario` int(11) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `Contrasena` varchar(255) COLLATE utf8_bin NOT NULL,
  `Email` varchar(100) COLLATE utf8_bin NOT NULL,
  `Fecha_Nacimiento` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id_Usuario`, `Nombre`, `Contrasena`, `Email`, `Fecha_Nacimiento`) VALUES
(1, 'Jose', '$2y$10$dDV/5X2XNpjdOUvJY5CZMeqgg36Lug8T8sI0pSC80rLzAW.cjXKh.', 'jose@gmail.com', '1986-04-02'),
(2, 'Walberto', '$2y$10$CIP.N84La8xRk3EHShxfGuVdQdz9wqCcfh/PVgt5fKFl.ftN.TQRu', 'walberto@gmail.com', '1986-04-02'),
(3, 'Sipriano', '$2y$10$0XtfyFNewlUIL2xyY4a27OkCf2.X7fnc8NReRRVQlESOSkVeEuxc.', 'sipriano@gmail.com', '1986-04-02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`Id_Agenda`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `Id_Agenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id_Usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
