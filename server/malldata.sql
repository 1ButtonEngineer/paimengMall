-- Host: 127.0.0.1
-- Port: 3001

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- SET time_zone = "+00:00";


--
-- Database: `malldata`
--

-- --------------------------------------------------------

--
-- 表的结构 `addresslist`
--
drop table if exists addresslist
CREATE TABLE IF NOT EXISTS `addresslist` (
  `addressId` int(16) NOT NULL AUTO_INCREMENT,
  `userId` varchar(64) NOT NULL,
  `userName` varchar(64) NOT NULL,
  `streetName` varchar(256) NOT NULL,
  `postCode` int(32) NOT NULL,
  `tel` varchar(32) NOT NULL,
  `isDefault` tinyint(1) NOT NULL,
  PRIMARY KEY (`addressId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

--
-- 表的结构 `cartlist`
--
drop table if exists cartlist
CREATE TABLE IF NOT EXISTS `cartlist` (
  `cartId` int(16) NOT NULL AUTO_INCREMENT,
  `userId` varchar(64) NOT NULL,
  `productId` int(32) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `productPrice` int(32) NOT NULL,
  `checked` varchar(32) NOT NULL,
  `productNum` int(32) NOT NULL,
  `productImg` varchar(256) NOT NULL,
  `totalPrice` varchar(64) NOT NULL,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--
drop table if exists goods
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `productId` int(32) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `productPrice` int(32) NOT NULL,
  `checked` varchar(32) NOT NULL DEFAULT '0',
  `productNum` int(32) NOT NULL,
  `productImg` varchar(256) NOT NULL,
  `sub_title` varchar(128) NOT NULL,
  `limit_num` int(16) NOT NULL,
  `desc` varchar(256) NOT NULL,
  `descImg` varchar(32) NOT NULL,
  `productDetails` varchar(126) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- 表中的数据 `goods`
--

-- --------------------------------------------------------
INSERT INTO `goods` (`id`, `productId`, `productName`, `productPrice`, `checked`, `productNum`, `productImg`, `sub_title`, `limit_num`, `desc`, `descImg`, `productDetails`) VALUES
(1, 10001, '双人沙发', 1299, '0', 0, '11.jpg', '拍下不会发货的\n', 10, '', '', '沙发 双人座椅 沙发床 sofa 灰色 约宽143×深75×高82cm 天然木脚带扶手 舒适 时尚 '),
(2, 10002, '被子四件套', 299, '0', 0, '12.jpg', '拍下不会发货\n', 10, '', '', '水星家纺 床上四件套纯棉床上用品被套床单床笠枕套双人全棉被罩套件 花西雅-床单款 1.8米床,适配220*240cm被芯 '),
(3, 10003, '壁画', 99, '0', 0, '13.jpg', '拍下不会发货\n', 10, '', '', '新现代简约北欧风格墙壁画沙发背景墙欧式轻奢画'),
(4, 10004, '收纳袋', 59, '0', 0, '15.jpg', '拍下不会发货\n', 10, '', '', '帆布可爱鲸鱼收纳盒家用桌面杂物整理盒多功能置物盒子'),
(5, 10005, '实木桌子', 599, '0', 0, '16.jpg', '拍下不会发货\n', 10, '', '', '花园实木折叠桌双人餐桌小型家用移动迷你餐桌木质简约茶几两用小圆桌'),
(6, 10006, '儿童床', 1099, '0', 0, '17.jpg', '拍下不会发货\n', 10, '', '', '实木儿童床上下床高低床双人床双层床实木床成年上下铺女孩床'),
(7, 10007, '床褥子', 199, '0', 0, '18.jpg', '拍下不会发货\n', 10, '', '', ' 京东京造 抗菌床褥 5层结构榻榻米床垫 双人加大加厚床褥子被褥垫子床垫保护套 180×200cm灰色'),
(8, 10008, '床垫', 1499, '0', 0, '19.jpg', '拍下不会发货\n', 10, '', '', '佰安广厦椰棕床垫硬棕垫薄折叠乳胶椰棕复合床垫子'),
(9, 10009, '复古时钟', 5999, '0', 0, '20.jpg', '拍下不会发货\n', 10, '', '', '钟表艺术怀旧中式古典挂钟客厅情怀复古摆钟家用静音大号创意欧式音乐报时时钟 木纹色-罗马钟面'),
(10, 10010, '保险柜', 7999, '0', 0, '21.jpg', '拍下不会发货\n', 10, '', '','虎牌保险柜家用办公室大型全钢防盗1米1.2米1.5米1.8米m指纹密码财务商务公司专用保险箱'),
(11, 10011, '欧式窗帘', 1999, '0', 0, '22.jpg', '拍下不会发货\n', 10, '', '', ' 遮光窗帘 窗帘成品 卧室阳台客厅窗帘布艺 免打孔挂钩式窗帘 '),
(12, 10012, '单人木椅', 599, '0', 0, '02.jpg', '拍下不会发货\n', 10, '', '', '休闲椅轻奢北欧风懒人沙发椅躺椅单人小户型现代简约卧室阳台办公椅家用带扶手'),
(13, 10013, '腰撑叠椅', 299, '0', 0, '23.jpg', '拍下不会发货\n', 10, '', '', 'Lorell 腰撑堆叠椅,1.5 英寸高 X 4.5 英寸宽 X 22.8 英寸长 '),
(14, 10014, '狗狗的床', 1099, '0', 0, '24.jpg', '拍下不会发货\n', 10, '', '', 'Casper 狗床，毛绒*海绵 沙色 中 '),
(15, 10015, '梳妆台', 499, '0', 0, '25.jpg', '拍下不会发货\n', 10, '', '', 'KidKraft 76123 公主木质梳妆台凳带镜子，儿童游戏室 / 卧室家具 - 粉色 '),
(16, 10016, '白色壁纸', 299, '0', 0, '26.jpg', '拍下不会发货\n', 10, '', '', '白色壁纸即剥即贴墙纸可拆卸厨房壁纸乙烯基薄膜白色丝绸壁纸橱柜家具工作台面 59.9 厘米 X 499.9 厘米 ');

--
-- 表的结构 `orderlist`
--
drop table if exists orderlist
CREATE TABLE IF NOT EXISTS `orderlist` (
  `orderId` varchar(128) NOT NULL,
  `userId` varchar(64) NOT NULL,
  `productId` int(32) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `productPrice` int(32) NOT NULL,
  `productNum` int(32) NOT NULL,
  `productImg` varchar(256) NOT NULL,
  `totalPrice` varchar(64) NOT NULL,
  `streetName` varchar(256) NOT NULL,
  `postName` varchar(32) NOT NULL,
  `postCode` varchar(32) NOT NULL,
  `tel` varchar(32) NOT NULL,
  `itemPrice` varchar(32) NOT NULL,
  `discount` varchar(32) NOT NULL COMMENT '折扣',
  `shipPrice` varchar(32) NOT NULL COMMENT '配送费',
  `freightRisk` varchar(32) NOT NULL COMMENT '运费险',
  `createDate` varchar(32) NOT NULL,
  `ifPay` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- 表的结构 `user`
--
drop table if exists user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `userId` varchar(64) NOT NULL,
  `userName` varchar(64) NOT NULL,
  `userPwd` varchar(64) NOT NULL,
  `myPhoto` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

