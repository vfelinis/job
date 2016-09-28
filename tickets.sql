-- phpMyAdmin SQL Dump
-- version 4.0.10.6
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 28 2016 г., 14:54
-- Версия сервера: 5.5.41-log
-- Версия PHP: 5.4.35

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
  `user` int(10) unsigned NOT NULL,
  `ticket` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ticket` (`ticket`),
  KEY `user` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

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
  `text` text NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `user` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `Ticket`
--

INSERT INTO `Ticket` (`id`, `status`, `type`, `theme`, `text`, `link`, `file`, `date`, `user`) VALUES
(1, 'Новый', 'Домены', 'Не могу подключить домен', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NULL, '/files/tickets/1', '2016-09-28 00:00:00', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `User`
--

CREATE TABLE IF NOT EXISTS `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Role_User` (`role`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `User`
--

INSERT INTO `User` (`id`, `login`, `password`, `role`) VALUES
(1, 'user', '123456', 1);

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
