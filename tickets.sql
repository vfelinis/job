-- phpMyAdmin SQL Dump
-- version 4.0.10.6
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 02 2016 г., 22:42
-- Версия сервера: 5.6.22-log
-- Версия PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `tickets`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Comment`
--

CREATE TABLE IF NOT EXISTS `Comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `file` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(10) unsigned NOT NULL,
  `ticket` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ticket` (`ticket`),
  KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=41 ;

-- --------------------------------------------------------

--
-- Структура таблицы `Role`
--

CREATE TABLE IF NOT EXISTS `Role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `Role`
--

INSERT INTO `Role` (`id`, `name`) VALUES
(1, 'customer'),
(2, 'employee');

-- --------------------------------------------------------

--
-- Структура таблицы `Ticket`
--

CREATE TABLE IF NOT EXISTS `Ticket` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `theme` varchar(255) NOT NULL,
  `full_text` text NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=61 ;

--
-- Дамп данных таблицы `Ticket`
--

INSERT INTO `Ticket` (`id`, `status`, `type`, `theme`, `full_text`, `link`, `file`, `date`, `update_date`, `user`) VALUES
(48, 'Новый', 'Домены', '1', '1', '', NULL, '2016-10-02 19:30:31', '2016-10-02 19:30:31', 4),
(49, 'Новый', 'Домены', '2', '2', '', NULL, '2016-10-02 19:30:42', '2016-10-02 19:30:42', 4),
(50, 'Новый', 'Домены', '3', '3', '', NULL, '2016-10-02 19:30:47', '2016-10-02 19:30:47', 4),
(51, 'Новый', 'Домены', '4', '4', '', NULL, '2016-10-02 19:30:53', '2016-10-02 19:30:53', 4),
(52, 'Новый', 'Домены', '5', '5', '', NULL, '2016-10-02 19:30:58', '2016-10-02 19:30:58', 4),
(53, 'Новый', 'Домены', '6', '6', '', NULL, '2016-10-02 19:31:02', '2016-10-02 19:31:02', 4),
(54, 'Новый', 'Домены', '7', '7', '', NULL, '2016-10-02 19:31:08', '2016-10-02 19:31:08', 4),
(55, 'Новый', 'Домены', '8', '8', '', NULL, '2016-10-02 19:31:13', '2016-10-02 19:31:13', 4),
(56, 'Новый', 'Домены', '9', '9', '', NULL, '2016-10-02 19:31:17', '2016-10-02 19:31:17', 4),
(57, 'Новый', 'Домены', '10', '10', '', NULL, '2016-10-02 19:31:22', '2016-10-02 19:31:22', 4),
(58, 'Новый', 'Домены', '11', '11', '', NULL, '2016-10-02 19:31:26', '2016-10-02 19:31:26', 4),
(59, 'Новый', 'Домены', '12', '12', '', NULL, '2016-10-02 19:31:33', '2016-10-02 19:31:33', 4),
(60, 'Новый', 'Домены', '13', '13', '', NULL, '2016-10-02 19:31:41', '2016-10-02 19:31:41', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `User`
--

CREATE TABLE IF NOT EXISTS `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `zone` int(11) NOT NULL DEFAULT '0',
  `role` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Role_User` (`role`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `User`
--

INSERT INTO `User` (`id`, `login`, `password`, `zone`, `role`) VALUES
(1, 'user', '123456', 0, 1),
(2, 'user2', '123456', 0, 1),
(3, 'user5', '$2y$10$8Duid6e2UC1zMjl/qSpAD.uAjVk5ucCGF/zX3Aqx171xToj.9qWGe', 0, 1),
(4, 'user6', '$2y$10$PaVDxJOOJ6K.cnqkoQPkv.9qztK8AhL/cVFNNKrsUYDtnd5aA0PBu', 5, 1),
(5, 'admin', '$2y$10$WNQb0lC4A.sbnkJerjOTKOQQcxb2X0Zh3iB7O.A802.WEblHI2iHq', 0, 2);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `FK_TICKET_COMMENT` FOREIGN KEY (`ticket`) REFERENCES `Ticket` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_USER_COMMENT` FOREIGN KEY (`user`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `Ticket`
--
ALTER TABLE `Ticket`
  ADD CONSTRAINT `FK_USER_TICKET` FOREIGN KEY (`user`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `FK_ROLE_USER` FOREIGN KEY (`role`) REFERENCES `Role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
