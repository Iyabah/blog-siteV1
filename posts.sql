-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2025 at 10:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `content`, `image`, `created_at`) VALUES
(1, 2, 'My First Blog', 'Testing my first blog 1234', 'https://res.cloudinary.com/dcyini9ap/image/upload/v1740597428/img_inmqsa.jpg', '2025-02-23 11:12:23'),
(2, 3, 'React vs Vue: Choosing the Right JavaScript Framework', 'Learning Curve\nReact tends to have a steeper learning curve as it requires understanding JavaScript concepts like JSX and functional programming. It offers more flexibility but fewer built-in solutions.\nVue is generally considered easier to pick up, especially for beginners. Its HTML-based template syntax feels familiar, and its official documentation is excellent.\nPerformance\nBoth frameworks offer similar performance for most applications. React uses a virtual DOM approach, while Vue uses a virtual DOM with additional optimizations. For typical applications, either framework performs excellently.\nCommunity & Ecosystem\nReact, backed by Facebook, has a massive ecosystem and community. Finding solutions, libraries, and developers is rarely an issue.\nVue, while smaller, has grown significantly and offers a well-curated set of official libraries for routing, state management, and more.\nWhen to Choose Each\nChoose React when:\n\nYou need maximum flexibility and customization\nYou\'re building a large, complex application\nYou want access to the largest ecosystem of libraries\n\nChoose Vue when:\n\nYou value simplicity and quick development\nYou prefer more structured guidance from the framework\nYou\'re transitioning from traditional HTML/CSS development\n\nBoth frameworks are excellent choices that will serve you well. The \"right\" choice often comes down to team familiarity, specific project requirements, and personal preference.', 'https://res.cloudinary.com/dcyini9ap/image/upload/v1740598122/img2_oemt5w.jpg', '2025-02-23 11:12:23'),
(3, 2, 'The Resilience of Africa: A Continent Rising\r\n', '\n\n\nAfrica is a land of resilience, beauty, and boundless potential. From the vast Sahara to the lush Congo rainforest, the continent is rich in culture, history, and untapped opportunities. Yet, despite its wealth—both natural and human—Africa has often been defined by its struggles. Colonial history, political instability, economic challenges, and social inequalities have cast long shadows over its progress. However, the narrative is changing.\n\nA New Dawn for Africa\nThe Africa of today is not the Africa of yesterday. Across the continent, a wave of innovation, entrepreneurship, and social transformation is sweeping through nations. Young Africans are reclaiming their identities, embracing technology, and driving solutions to longstanding problems.\n\nFrom fintech startups in Nigeria revolutionizing digital payments to young farmers in Kenya adopting smart agriculture, Africa’s youth are proving that the continent is not just surviving but thriving. This energy is being fueled by increased access to education, the rise of social movements, and a growing sense of self-determination.\n\nThe Power of Community and Culture\nOne of Africa’s greatest strengths is its deep-rooted sense of community. Ubuntu, a philosophy that means \"I am because we are,\" captures the essence of African humanity. Unlike in many individualistic societies, Africa’s communal approach to life fosters a spirit of togetherness, support, and collective progress.\n\nThe continent’s diverse cultures—represented in its music, art, literature, and traditions—are also gaining global recognition. Afrobeats has taken the world by storm, Nollywood is producing internationally acclaimed films, and African fashion is redefining global trends. These cultural exports are not just entertainment; they are powerful tools of economic empowerment and self-representation.\n\nChallenges and the Road Ahead\nWhile Africa’s progress is undeniable, challenges remain. Corruption, poor governance, inadequate infrastructure, and climate change threaten to slow the momentum. However, Africa has always been a land of problem solvers. The rise of digital activism, a more politically conscious youth, and investment in homegrown solutions suggest that the future is bright.\n\nThe Role of Humanity in Africa’s Future\nThe most significant resource Africa has is its people. For Africa to rise, its people must continue to embrace education, innovation, and unity. Governments must prioritize leadership that serves the people, and the diaspora must play an active role in reshaping the African narrative.\n\nAfrica is not waiting for a savior—it is writing its own story. The world must pay attention because this is a renaissance in the making. The resilience of Africa is not just a testament to its past struggles but a beacon of hope for its future.\n\nAs the African proverb says, “However long the night, the dawn will break.” The dawn is here, and Africa is ready.\n\n', 'https://res.cloudinary.com/dcyini9ap/image/upload/v1739803395/samples/landscapes/beach-boat.jpg', '2025-02-26 15:11:40'),
(4, NULL, 'The JavaScript Ecosystem: Building Modern Web Experiences', 'Looking at the evolution of JavaScript and its surrounding technologies reveals an incredible journey of innovation and creativity in web development. From humble beginnings as a simple scripting language to powering complex applications, JavaScript has transformed how we build for the web.\r\nThe Power of JavaScript\r\nJavaScript has evolved from a basic language for adding interactivity to web pages into a robust ecosystem that powers everything from mobile applications to server backends. This transformation didn\'t happen overnight—it\'s the result of continuous innovation and community contribution.\r\nThe Framework Revolution\r\nThe introduction of frameworks like React, Vue, and Angular revolutionized how developers build interactive interfaces. These tools provide structured approaches to creating component-based applications that are maintainable and scalable.\r\nEach framework brings its own philosophy:\r\n\r\nReact emphasizes a component-based architecture with a virtual DOM for efficient updates\r\nVue offers an approachable learning curve with intuitive templates\r\nAngular provides a comprehensive platform with built-in solutions for common challenges\r\n\r\nBeyond the Browser\r\nJavaScript now extends far beyond the browser. With Node.js, developers can use the same language for both frontend and backend development, creating a more unified development experience. This \"JavaScript everywhere\" approach has significantly streamlined web development workflows.\r\nTools and Ecosystem\r\nThe modern JavaScript landscape includes essential tools that improve developer experience:\r\n\r\nPackage managers like npm and Yarn for dependency management\r\nBuild tools like Webpack and Vite for optimizing application delivery\r\nTypeScript for adding type safety to JavaScript projects\r\n\r\nThe Future Is Bright\r\nAs JavaScript continues to evolve, we\'re seeing exciting new capabilities emerge. From WebAssembly integration to improved browser APIs, the language keeps expanding its capabilities while maintaining its core simplicity.\r\nJavaScript remains at the heart of modern web development—a testament to its flexibility, community support, and continuous improvement. Whether you\'re building a simple website or a complex application, understanding the JavaScript ecosystem is a valuable skill that opens up countless possibilities for creating exceptional web experiences.', 'https://res.cloudinary.com/dcyini9ap/image/upload/v1739806367/javascript_mctgjj.png', '2025-02-26 19:33:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
