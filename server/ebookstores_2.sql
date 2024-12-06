CREATE DATABASE Ebookstores;
USE Ebookstores;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: ebookstores
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) NOT NULL,
  `author_biography` text,
  `author_nationality` varchar(50) DEFAULT NULL,
  `author_dob` date DEFAULT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Callie Hart',NULL,'United Kingdom',NULL),(2,'Kaylie Smith','Kaylie Smith is a writer and lover of all things magical and fantasy. She grew up in Louisiana where she frequently haunted bookstores and practiced her writing craft. After getting her BFA, she decided to fully pursue her dream of being an author and writing books in the romantasy genre. Her first series, the HEARTLESS FATES trilogy published from Disney Hyperion and her adult romance debut, PHANTASMA, is out September 2024. When she isn’t writing or reading, she can be found at home with her Australian Shepherds, talking to ghosts, or dusting her growing collection of knitted frogs.',NULL,NULL),(3,'Arantxa Comes','Arantxa Comes (Alzira, 1991). Es escritora y correctora. Entre sus publicaciones destaca la trilogía de El Don de la Diosa (La redención, La huida y El castigo), con la que empezó su andadura en el mundo de la literatura juvenil gracias a Munyx Editorial. También la bilogía de La Tierra de la Traición y La Isla de la Rebelión. Y ahora alcanza su sexta novela con Travesía, una historia autoconclusiva donde nada es lo que parece.Por otra parte, es sencillo encontrarla en diversas antologías con Descendiente, relato finalista del I Premio Ripley (Triskel Ediciones, 2017), Pocas palabras bastan, relato ganador de Alucinadas IV (Palabaristas, 2018), Dos balas, relato finalista en La Matanza del cerdo (Munyx Editorial, 2019) y Su memoria en tu hi ...more','Spain',NULL),(4,'Emma Dues','Emma is a middle school teacher by day, thriller writer by night. She lives in the Midwest with her husband and family of rescue cats. When Emma isn’t writing or at school, she’s counting down to Halloween and watching scary movies. RETURN TO MIDNIGHT is her debut novel.',NULL,NULL),(5,'Catherine Doyle','Catherine Doyle grew up in the West of Ireland. She holds a first-class BA in Psychology and a first-class MA in Publishing. She is the author of the Young Adult Blood for Blood trilogy (Vendetta, Inferno and Mafiosa), which is often described as Romeo and Juliet meets the Godfather. It was inspired by her love of modern cinema. Her debut Middle Grade novel, The Storm Keeper\'s Island (Bloomsbury, 2018), is an adventure story about family, bravery and self-discovery. It is set on the magical island of Arranmore, where her grandparents grew up, and is inspired by her ancestors\' real life daring sea rescues.','Ireland',NULL),(6,'Alison Espach',NULL,NULL,NULL),(7,'Liz Moore','Liz Moore is the author of the novels THE WORDS OF EVERY SONG (Broadway Books, 2007), HEFT (W.W. Norton, 2012), THE UNSEEN WORLD (W.W. Norton, 2016), and the New York Times-bestselling Long Bright River (Riverhead, 2019). A winner of the Rome Prize in Literature, she lives in Philadelphia with her family, and teaches in the M.F.A. program in Creative Writing at Temple University. ...more','in Boston, Massachusetts, The United States',NULL),(8,'Chris Whitaker','Chris Whitaker is the author of the New York Times and Sunday Times bestselling All The Colours Of The Dark. His other acclaimed and bestselling novels include We Begin At The End, Tall Oaks, and All The Wicked Girls.His books have also been selected for the Read With Jenna Book Club, Waterstones Thriller of the Month, Barnes & Noble Book Club, Good Morning America Book Club, and for BBC2’s Between The Covers.Chris’s novels have been translated into thirty-one languages and have won the CWA Gold Dagger, the CWA John Creasey Dagger, the Theakston Crime Novel of the Year, the Ned Kelly International Award, and numerous awards around the world.All The Colours Of The Dark is currently in development with Universal Pictures.','in London , The United Kingdom',NULL),(9,'Liane Moriarty','Liane Moriarty is the author of the #1 New York Times bestsellers Big Little Lies, The Husband’s Secret, and Truly Madly Guilty; the New York Times bestsellers Apples Never Fall, Nine Perfect Strangers, What Alice Forgot, and The Last Anniversary; The Hypnotist’s Love Story; and Three Wishes. She lives in Sydney, Australia, with her husband and two children.','Sydney, Australia',NULL),(10,'Matt Haig','Matt Haig is the author of novels such as The Midnight Library, How to Stop Time, The Humans, The Radleys, and the forthcoming The Life Impossible. He has also written books for children, such as A Boy Called Christmas, and the memoir Reasons to Stay Alive.','in Sheffield, The United Kingdom',NULL),(11,'Laura Dave','Laura Dave is the #1 New York Times bestselling author of several novels including The Last Thing He Told Me and Eight Hundred Grapes. Her novels have been translated into thirty-eight languages, and six of them, including The Night We Lost Them, have been optioned for film and television. She resides in Santa Monica, California.','New York, The United States',NULL),(12,'Jason Rekulak','I\'m the author of three novels: HIDDEN PICTURES, THE IMPOSSIBLE FORTRESS, and (coming in October 2024!) THE LAST ONE AT THE WEDDING. For many years I was Publisher of Quirk Books, an indie press headquartered in Philadelphia, where I ghost-wrote many odd books that may or may not surface on this page, depending on the metadata. I live in West Philly with my wife and children. ...more','The United States',NULL),(17,'Clare Mackintosh','Welcome to my Goodreads profile! Whether you\'re new to my work, or a hard-core fan, it\'s lovely to see you here. My latest novel is A GAME OF LIES, the instant Sunday Times bestseller, and the second in my crime series featuring Welsh detective Ffion Morgan, who we first meet in THE LAST PARTY. I\'m hard at work now on the next in the series.I\'m the author of I LET YOU GO, I SEE YOU, LET ME LIE and HOSTAGE - page-turning thrillers that have sold more than two million copies across 40 countries, and hit bestseller lists including The Sunday Times and The New York Times. I also wrote the emotional rollercoaster, AFTER THE END: a family drama about an impossible choice that threatens to tear a couple apart. It\'s the most personal book I\'ve writ ...more','The United Kingdom',NULL),(18,'Katherine Webber','Katherine Webber was born in Southern California in 1987. She has lived in Hong Kong, Hawaii, and Atlanta. She currently lives in London with her husband, Kevin, and their young daughter. In addition to her YA, Katherine also co-writes young fiction, as Katie Tsang, with Kevin.Katherine studied Comparative Literature at the University of California, Davis and Chinese literature and language at the Chinese University of Hong Kong. She has worked at an international translation company, a technology startup, and a reading charity. She now writes full time.She loves an adventure, whether it is found in a book or in real life and has travelled to over 45 countries. Travel, books, and eating out are her favourite indulgences.',NULL,NULL);
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) NOT NULL,
  `book_description` text,
  `book_price` int DEFAULT NULL,
  `publication_year` decimal(4,0) DEFAULT NULL,
  `book_language` varchar(50) DEFAULT NULL,
  `inventory_quantity` int NOT NULL,
  `publisher_id` int DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `book_type` varchar(255) NOT NULL,
  PRIMARY KEY (`book_id`),
  KEY `publisher_id` (`publisher_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'Return to Midnight','On the anniversary of a savage mass murder, a survivor returns to the scene of the crime―and all its buried secrets―in a twisting novel of suspense.Nearly ten years ago, five Ohio university students were murdered in an off-campus Victorian home. The media dubbed it the Midnight House Massacre. Ever since, survivor and novelist Margot Davis has wanted to forget it, and never again utter the killer’s name. Until she’s compelled to write her side of the story. To do that, she’s returning to Midnight House.It’ll be a chance for Margot to reconnect with other survivors, heal the trauma, and dispel the ugly conspiracy theories of obsessed true crime fanatics. But when news of Margot’s book gets out, she receives a threatening note that demands she stop lying. Or else. It chills Margot’s blood. Because she hasn’t been telling the whole truth.As the threats continue, each more sinister than the last, a journalist comes to Margot with new suspicions about that brutal October night. Now, to save her own life, Margot must reveal her well-guarded secrets―ones that, for good reason, she’s been too terrified to share.',23,2024,'English',50,6,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710359199i/202450506._SX600_.jpg','Hardcover'),(2,'The Wedding People','A propulsive and uncommonly wise novel about one unexpected wedding guest and the surprising people who help her start anew.It’s a beautiful day in Newport, Rhode Island, when Phoebe Stone arrives at the grand Cornwall Inn wearing a green dress and gold heels, not a bag in sight, alone. She\'s immediately mistaken by everyone in the lobby for one of the wedding people, but she’s actually the only guest at the Cornwall who isn’t here for the big event. Phoebe is here because she’s dreamed of coming for years—she hoped to shuck oysters and take sunset sails with her husband, only now she’s here without him, at rock bottom, and determined to have one last decadent splurge on herself. Meanwhile, the bride has accounted for every detail and every possible disaster the weekend might yield except for, well, Phoebe and Phoebe\'s plan—which makes it that much more surprising when the two women can’t stop confiding in each other.In turns absurdly funny and devastatingly tender, Alison Espach’s The Wedding People is ultimately an incredibly nuanced and resonant look at the winding paths we can take to places we never imagined—and the chance encounters it sometimes takes to reroute us.',21,2024,'English',100,7,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1721918653i/198902277.jpg','Hardcover'),(3,'The God of the Woods','Early morning, August 1975: a camp counselor discovers an empty bunk. Its occupant, Barbara Van Laar, has gone missing. Barbara isn’t just any thirteen-year-old: she’s the daughter of the family that owns the summer camp and employs most of the region’s residents. And this isn’t the first time a Van Laar child has disappeared. Barbara’s older brother similarly vanished fourteen years ago, never to be found.As a panicked search begins, a thrilling drama unfolds. Chasing down the layered secrets of the Van Laar family and the blue-collar community working in its shadow, Moore’s multi-threaded story invites readers into a rich and gripping dynasty of secrets and second chances. It is Liz Moore’s most ambitious and wide-reaching novel yet.',12,2024,'English',100,8,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1717970538i/199698485.jpg','Hardcover'),(4,'All the Colors of the Dark','From the New York Times bestselling author of We Begin at the End comes a soaring thriller and an epic love story that spans decades.1975 is a time of change in America. The Vietnam War is ending. Mohammed Ali is fighting Joe Frazier. And in the small town of Monta Clare, Missouri, girls are disappearing.When the daughter of a wealthy family is targeted, the most unlikely hero emerges—Patch, a local boy with one eye, who saves the girl, and, in doing so, leaves heartache in his wake.Patch and those who love him soon discover that the line between triumph and tragedy has never been finer. And that their search for answers will lead them to truths that could mean losing one another.A missing person mystery, a serial killer thriller, a love story, a unique twist on each, Chris Whitaker has written a novel about what lurks in the shadows of obsession, and the blinding light of hope.',14,2024,'English',100,9,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718910617i/203019740.jpg','Hardcover'),(5,'Here One Moment','If you knew your future, would you try to fight fate?Aside from a delay, there will be no problems. The flight will be smooth, it will land safely. Everyone who gets on the plane will get off. But almost all of them will be forever changed.Because on this ordinary, short, domestic flight, something extraordinary happens. People learn how and when they are going to die. For some, their death is far in the future—age 103!—and they laugh. But for six passengers, their predicted deaths are not far away at all.How do they know this? There were ostensibly more interesting people on the flight (the bride and groom, the jittery, possibly famous woman, the giant Hemsworth-esque guy who looks like an off-duty superhero, the frazzled, gorgeous flight attendant) but none would become as famous as “The Death Lady.”Not a single passenger or crew member will later recall noticing her board the plane. She wasn’t exceptionally old or young, rude or polite. She wasn’t drunk or nervous or pregnant. Her appearance and demeanor were unremarkable. But what she did on that flight was truly remarkable.A few months later, one passenger dies exactly as she predicted. Then two more passengers die, again, as she said they would. Soon no one is thinking this is simply an entertaining story at a cocktail party.If you were told you only had a certain amount of time left to live, would you do things differently? Would you try to dodge your destiny?Liane Moriarty’s Here One Moment is a brilliantly constructed tale that looks at free will and destiny, grief and love, and the endless struggle to maintain certainty and control in an uncertain world. A modern-day Jane Austen who humorously skewers social mores while spinning a web of mystery, Moriarty asks profound questions in her newest I-can’t-wait-to-find-out-what-happens novel.',42,2024,'English',100,10,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1721670560i/208516656.jpg','Hardcover'),(6,'The Life Impossible','The remarkable next novel from Matt Haig, the author of #1 New York Times bestseller The Midnight Library, with more than nine million copies sold worldwide“What looks like magic is simply a part of life we don’t understand yet…”When retired math teacher Grace Winters is left a run-down house on a Mediterranean island by a long-lost friend, curiosity gets the better of her. She arrives in Ibiza with a one-way ticket, no guidebook and no plan.Among the rugged hills and golden beaches of the island, Grace searches for answers about her friend’s life, and how it ended. What she uncovers is stranger than she could have dreamed. But to dive into this impossible truth, Grace must first come to terms with her past.Filled with wonder and wild adventure, this is a story of hope and the life-changing power of a new beginning.',10,2024,'English',100,12,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707411860i/198281740.jpg','Hardcover'),(7,'The Night We Lost Him','Nora Noone’s father, Liam, was many things to many people. To the public he was a self-made hotel magnate, whose luxury boutique hotels were among the most coveted destinations in the world. To his three ex-wives, he was a loving yet distant family man who managed to keep his finances—and his families—separate. But to Nora, her father was always a mystery—especially after his suspicious death at his cliffside home.',9,2024,'English',100,12,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708711207i/207299448.jpg','Hardcover'),(8,'The Last One at the Wedding','From the bestselling author of Hidden Pictures comes a breathtaking work of suspense about a father trying to save his daughter from a life-altering decision that will put everything he loves on the line.Frank Szatowski is shocked when his daughter, Maggie, calls him for the first time in three years. He was convinced that their estrangement would become permanent. He’s even more surprised when she invites him to her upcoming wedding in New Hampshire. Frank is ecstatic, and determined to finally make things right.He arrives to find that the wedding is at a private estate—very secluded, very luxurious, very much out of his league. It seems that Maggie failed to mention that she’s marrying Aidan Gardner, the son of a famous tech billionaire. Feeling desperately out of place, Frank focuses on reconnecting with Maggie and getting to know her new family. But it’s difficult: Aidan is withdrawn and evasive; Maggie doesn’t seem to have time for him; and he finds that the locals are disturbingly hostile to the Gardners. Frank needs to know more about this family his daughter is marrying into, but if he pushes too hard, he could lose Maggie forever.An edge-of-your-seat thriller that delves deep into the heart of one family, The Last One at the Wedding is a work of brilliant suspense from a true modern master.',17,2024,'English',100,14,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1728476850i/203579177.jpg','Hardcover'),(9,'The Boyfriend','Sydney Shaw, like every single woman in New York, has terrible luck with dating. She’s seen it men who lie in their dating profile, men who stick her with the dinner bill, and worst of all, men who can\'t shut up about their mothers. But finally, she hits the jackpot.Her new boyfriend is utterly perfect. He\'s charming, handsome, and works as a doctor at a local hospital. Sydney is swept off her feet.Then the brutal murder of a young woman―the latest in a string of deaths across the coast―confounds police. The primary suspect? A mystery man who dates his victims before he kills them.Sydney should feel safe. After all, she is dating the guy of her dreams. But she can’t shake her own suspicions that the perfect man may not be as perfect as he seems. Because someone is watching her every move, and if she doesn’t get to the truth, she’ll be the killer’s next victim...A dark story about obsession and the things we’ll do for love, #1 New York Times bestselling author Freida McFadden proves that crimes of passion are often the bloodiest…',19,2024,'English',100,15,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711205083i/208503280.jpg','Hardcover'),(10,'The Last Party','A loving mother. A notorious murderer. They both have reasons to hide their secrets in a novel of escalating shock and suspense by New York Times bestselling author A. R. Torre.Perla Wultz lives with her husband, Grant, and their precious daughter, Sophie, in a gated Pasadena community. Affluent, sociable, and accomplished, Perla plays the part of loving wife and mother to perfection. It seems an ideal life, if not for a decades-old crime that has become Perla’s dark and consuming secret obsession.Twenty-three years ago, Leewood Folcrum confessed to murdering two young girls during a birthday party. Though he’s been condemned to a life sentence, his crime is not forgotten. Not by Perla, nor by an inquisitive doctoral student interviewing Folcrum for his dissertation. He’s getting the killer to open up—about his motives, his confession, and the truth of what really happened on that horrible night.As the past and the present entwine, the deceptions behind the infamous murder begin to surface. But who’s deceiving who now? And why? And as an ingeniously twisted plan is set in motion, who will be the next to die?',23,2024,'English',100,1,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710368139i/205837684.jpg','Hardcover'),(11,'Phantasma','Caraval meets Throne of the Fallen in this spicy dark romantasy where a necromancer needs help from a dangerous phantom to win a deadly competition, only to find their partnership puts her at risk of breaking the game’s most vital rule: don\'t fall in love.When Ophelia and her sister discovers their mother brutally murdered, there is no time to grieve: Ophelia has inherited both her powerful death-driven magic and enormous debt on their home. Circumstances go from dire to deadly, however, when Ophelia’s sister decides to pay off the loan by entering Phantasma—a competition where most contestants don’t make it out alive and the winner is granted a single wish.The only way to save her sister is to compete. But Phantasma is a cursed manor, with twisting corridors and lavish ballrooms, and filled with enticing demons and fatal temptations. Ophelia will need to face nine floors of challenges to win... if her fears don’t overtake her first.When a charming, arrogant stranger claims he can protect and guide Ophelia, she knows she shouldn’t trust him. While Blackwell may not seem dangerous, appearances can be deceptive. But with her sister’s life on the line, Ophelia can’t afford to turn him away. She just needs to ignore the overwhelming, dark attraction drawing them closer and closer together.Because in Phantasma, the only thing deadlier than losing the game is losing your heart.',19,2024,'English',100,2,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710664241i/204593914.jpg','Hardcover'),(12,'A Ruinous Fate','Calliope Rosewood is a witch with a long streak of bad luck. Like all witches in Illustros, her fate is directly tied to Witch’s Dice—powerful artifacts that have blessed her kind with limitless magic but also set them on a path toward destruction. Cursed with unspeakable powers that terrify even the most dangerous witches and fae, Calla deserted her coven four years ago and has been in hiding with her two best friends since. But Calla is also hiding a grave secret: She is only three Rolls away from becoming the last Blood Warrior and starting the Final War that will decimate her people and eradicate their magic.After a betrayal from her ex leads her one step closer to fulfilling that age-old prophecy, Calla is desperate to do whatever it takes to reset her fate . . . even if that means journeying into the deadly Neverending Forest with said ex and his enticing, yet enigmatic older brother to find the one being who can help her forge her own path. As Calla ventures farther into the enchanted woods, she finds her heart torn between her past desires and the alluring new possibilities of her future and learns that choosing your own destiny may come with deadly consequences.Featuring a charming and chaotic ensemble cast of characters, this first book in a planned series by debut author Kaylie Smith will sweep readers away with its utterly immersive world building, swoon-worthy romance, and action-packed storytelling.',13,2023,'English',100,3,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653661936i/61030595.jpg','Hardcover'),(13,'Mala bruja nunca muere','Es fácil borrar las huellas de quienes nunca han sido alguien.Hace un año que la hermana de Nova murió durante una invocación prohibida de su aquelarre. O desapareció. Depende de a quién se le pregunte.Ahora Nova solo busca la verdad… si es que el abismo de traiciones, amistad, amor y misterio que se abre ante ella no se la traga antes.El problema es: ¿de quién puede fiarse?',11,2024,'Spanish',100,4,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712139428i/210705632.jpg','Hardcover'),(14,'Sugar','Al Minerva International School se le acumulan los cadáveres.Al Minerva International School se le acumulan los rumores.Al Minerva International School se le acumulan los sospechosos.El Minerva International School es uno de los institutos más exclusivos de Europa. Aquí es donde los billonarios envían a sus cachorros para que aprendan a dirigir el futuro.Pol Hidalgo, el atractivo líder de segundo de Bachillerato, y Moon Kirby, la carismática hija menor de una superestrella del rock, han muerto en extrañas circunstancias durante las dos últimas fiestas de inicio de curso.',9,2024,'Spanish',100,5,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697768662i/200283904.jpg','Hardcover'),(15,'The Dagger and the Flame','From the number one bestselling author Catherine Doyle comes the most fiery enemies-to-lovers romantasy of the year. Perfect for fans of Sarah J. Maas, Leigh Bardugo and Stephanie Garber.  In the dark underbelly of a beautiful city, two rival assassins are pitted against each other in a deadly game of revenge, where the most dangerous mistake of all is falling in love…In Fantome, a kingdom of cobbled streets, flickering lamplight, beautiful buildings, and secret catacombs, Shade-magic is a scarce and deadly commodity controlled by two enemy the Cloaks and the Daggers – the thieves and the assassins. On the night of her mother’s murder, 17-year-old Seraphine runs for her life. Seeking sanctuary with the Cloaks, Sera’s heart is set on revenge. But are her secret abilities a match for the dark-haired boy whose quicksilver eyes follow her around the city?Nothing can prepare Sera for the moment she finally comes face-to-face with Ransom, heir to the Order of Daggers. And Ransom is shocked to discover that this unassuming farmgirl wields a strange and blazing magic he has never seen before… Among rumours of monsters stalking the streets and the rival guilds grappling for control of Fantome’s underworld, Sera and Ransom are drawn together by something more than just magic and must face a deadly choice - forgiveness or vengeance? Kiss or kill? Dagger or Flame?  ',12,2024,'English',100,7,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709149861i/174547967.jpg','Hardcover'),(16,'Twin Crowns','Wren Greenrock has always known that one day she would steal her sister\'s place in the palace. Trained from birth to return to the place of her parents\' murder and usurp the only survivor, she will do anything to rise to power and protect the community of witches she loves. Or she would, if only a certain palace guard wasn\'t quite so distractingly attractive, and if her reckless magic didn\'t have a habit of causing trouble...Princess Rose Valhart knows that with power comes responsibility. Marriage into a brutal kingdom awaits, and she will not let a small matter like waking up in the middle of the desert in the company of an extremely impertinent (and handsome) kidnapper get in the way of her royal duty. But life outside the palace walls is wilder and more beautiful than she ever imagined, and the witches she has long feared might turn out to be the family she never knew she was missing.Two sisters separated at birth and raised into entirely different worlds are about to get to know each other\'s lives a whole lot better. But as coronation day looms closer and they each strive to claim their birthright, the sinister Kingsbreath, Willem Rathborne, becomes increasingly determined that neither will succeed. Who will ultimately rise to power and wear the crown?',12,2024,'English',100,8,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643305315i/58733682.jpg','Hardcover'),(17,'Cursed Crowns','Bestselling authors and real-life sisters-in-law Catherine Doyle and Katherine Webber join forces on a compelling YA fantasy bursting with high-stakes adventure, romance and humour. Two queens, one throne. What can possibly go wrong . . .?Twin queens Wren and Rose have claimed their crowns . . . but not everyone is happy about witches sitting on Eana\'s throne.Cool-headed Rose sets off on a Royal Tour to win over the doubters, but soon finds herself drawn to the Sunless Kingdom. Here secrets are revealed about those closest to her, and Rose finds her loyalties divided.Meanwhile rebellious Wren steals away to the icy north to rescue their beloved grandmother, Banba. But when she accepts King Alarik\'s deadly magical bargain in exchange for Banba\'s freedom, the spell has unexpected - and far-reaching - consequences . . .As an ancient curse begins to arise from the darkness, the sisters must come together and unite the crown. Their lives - and the future of Eana - depend on it.',11,2024,'English',100,8,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1665764623i/61980309.jpg','Hardcover'),(18,'Burning Crowns','Twin queens Rose & Wren survived the Battle for Anadawn and brought back magic to their kingdom. But danger lurks in Eana’s shadows.Wren is troubled. Ever since she performed the blood spell on Prince Ansel, her magic has become unruly. Worse, the spell created a link between Wren and the very man she’s trying to forget: Icy King Alarik of Gevra. A curse is eating away at both of them. To fix it they must journey to the northern mountains—under the watchful guard of Captain Tor Iversen—to consult with the Healer on High.Rose is haunted. Waking one night to find her undead ancestor Oonagh Starcrest by her bed, she receives a warning: surrender the throne—or face a war that will destroy Eana. With nowhere to turn and desperate to find a weapon to defeat Oonagh, Rose seeks help from Shen-Lo in the Sunkissed Kingdom, but what she finds there may break her heart.As Oonagh threatens all Rose and Wren hold dear, it will take everything they have to save Eana–including a sacrifice they may not be prepared to make.',11,2024,'English',100,9,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693390445i/198240283.jpg','Hardcover'),(19,'Captain of Fates','Bestselling author Katherine Webber pens a highly-anticipated and swoonful new spin-off to the Sunday Times bestselling YA romantic fantasy series, Twin Crowns.Bursting with epic adventure, romance and humour on the high seas. Someone is making waves …Captain Marino Pegasi is never happier than when he’s exploring the oceans. But when his beloved sister, Celeste, falls gravely ill, he is forced to go on a desperate search for a cure. Little does he know that in his search he will find so much more lying beyond the horizon. Does Marino’s fate truly lie in the hands of a bewitching, mysterious mermaid …?',10,2024,'English',100,9,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1728245306i/214231734.jpg','Hardcover'),(20,'A Game of Lies','Stranded in the Welsh mountains, seven reality show contestants have no idea what they\'ve signed up for.Each of these strangers has a secret. If another player can guess the truth, they won\'t just be eliminated - they\'ll be exposed live on air. The stakes are higher than they\'d ever imagined, and they\'re trapped.The disappearance of a contestant wasn\'t supposed to be part of the drama. Detective Ffion Morgan has to put aside what she\'s watched on screen, and find out who these people really are - knowing she can\'t trust any of them.And when a murderer strikes, Ffion knows every one of her suspects has an alibi . . . and a secret worth killing for.',11,2024,'English',100,16,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689477442i/123513986.jpg','Hardcover'),(21,'Other People\'s Houses','From the author who brought you the jaw-dropping twist of I Let You Go, the gasp-out-loud ending of Let Me Lie, and the loveable, unpredictable Ffion Morgan in The Last Party and A Game of Lies.',9,2024,'English',100,17,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1732553765i/211965585.jpg','Hardcover');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cooperate`
--

DROP TABLE IF EXISTS `cooperate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooperate` (
  `publisher_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`publisher_id`,`author_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `cooperate_ibfk_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`),
  CONSTRAINT `cooperate_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cooperate`
--

LOCK TABLES `cooperate` WRITE;
/*!40000 ALTER TABLE `cooperate` DISABLE KEYS */;
INSERT INTO `cooperate` VALUES (9,7),(11,8),(11,9),(12,10),(13,11),(14,12),(15,12),(16,17),(17,17);
/*!40000 ALTER TABLE `cooperate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_account`
--

DROP TABLE IF EXISTS `customer_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_account` (
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_phone` varchar(50) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_address` text,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_account`
--

LOCK TABLES `customer_account` WRITE;
/*!40000 ALTER TABLE `customer_account` DISABLE KEYS */;
INSERT INTO `customer_account` VALUES ('user1','Password1','Nguyễn Quốc Anh','0123456789','webapp@hcmut.edu.vn','123 Banglades, The United States');
/*!40000 ALTER TABLE `customer_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `discount_id` varchar(50) NOT NULL,
  `username` varchar(15) DEFAULT NULL,
  `amount` int NOT NULL,
  PRIMARY KEY (`discount_id`),
  KEY `username` (`username`),
  CONSTRAINT `discount_ibfk_1` FOREIGN KEY (`username`) REFERENCES `customer_account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
INSERT INTO `discount` VALUES ('BLACKFRIDAY','user1',20);
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_list`
--

DROP TABLE IF EXISTS `favorite_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_list` (
  `favorite_list_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  PRIMARY KEY (`favorite_list_id`),
  KEY `username` (`username`),
  CONSTRAINT `favorite_list_ibfk_1` FOREIGN KEY (`username`) REFERENCES `customer_account` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_list`
--

LOCK TABLES `favorite_list` WRITE;
/*!40000 ALTER TABLE `favorite_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorited_book`
--

DROP TABLE IF EXISTS `favorited_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorited_book` (
  `book_id` int NOT NULL,
  `favorite_list_id` int NOT NULL,
  PRIMARY KEY (`book_id`),
  KEY `favorite_list_id` (`favorite_list_id`),
  CONSTRAINT `favorited_book_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`),
  CONSTRAINT `favorited_book_ibfk_2` FOREIGN KEY (`favorite_list_id`) REFERENCES `favorite_list` (`favorite_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorited_book`
--

LOCK TABLES `favorited_book` WRITE;
/*!40000 ALTER TABLE `favorited_book` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorited_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `AGenre` varchar(255) NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`AGenre`,`book_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `genre_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES ('Adult',1),('Crime',1),('Fiction',1),('Mystery',1),('Thriller',1),('Adult',2),('Fiction',2),('Humor',2),('Romance',2),('Adult',3),('Historical',3),('Mystery',3),('Thriller',3),('Adult',4),('Crime',4),('Fiction',4),('Mystery',4),('Romance',4),('Thriller',4),('Adult',5),('Fiction',5),('Mystery',5),('Thriller',5),('Adult',6),('Fantasy',6),('Fiction',6),('Magical Realism',6),('Science Fiction',6),('Adult',7),('Family',7),('Fiction',7),('Mystery',7),('Romance',7),('Thriller',7),('Crime',8),('Fiction',8),('Horror',8),('Mystery',8),('Thriller',8),('Adult',9),('Crime',9),('Fiction',9),('Mystery',9),('Psychological Thriller',9),('Romance',9),('Thriller',9),('Crime',10),('Fiction',10),('Horror',10),('Mystery',10),('Thriller',10),('Adult',11),('Dark',11),('Fantasy',11),('Gothic',11),('Horror',11),('Paranormal',11),('Paranormal Romance',11),('Romance',11),('Romantasy',11),('Dark',12),('Fantasy',12),('Fiction',12),('LGBT',12),('Queer',12),('Romance',12),('Witches',12),('Young Adult',12),('Fiction',13),('Paranormal',13),('Witches',13),('Dark',14),('Horror',14),('Thriller',14),('Fantasy',15),('Fiction',15),('High Fantasy',15),('Magic',15),('Romance',15),('Romantasy',15),('Fantasy',16),('Fiction',16),('Magic',16),('Romance',16),('Romantasy',16),('Witches',16),('Fantasy',17),('Fiction',17),('High Fiction',17),('Magic',17),('Romance',17),('Romantasy',17),('Witches',17),('Fantasy',18),('Fiction',18),('High Fiction',18),('Magic',18),('Romance',18),('Romantasy',18),('Witches',18),('Fantasy',19),('Romance',19),('Romantasy',19),('Witches',19),('Young Adult',19),('Adult',20),('Crime',20),('Detective',20),('Literature',20),('Mystery',20),('Thriller',20);
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `invoice_id` int NOT NULL AUTO_INCREMENT,
  `invoice_date` date DEFAULT NULL,
  `customer_id` varchar(15) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `money_paid` int NOT NULL,
  PRIMARY KEY (`invoice_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_account` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,'2024-12-06','user1','By Credit',42),(3,'2024-12-06','user1','Completed',500),(4,'2024-12-06','user1','By Credits',200),(5,'2024-12-06','user1','By Credits',109),(6,'2024-12-06','user1','By Credits',109),(7,'2024-12-06','user1','By Credits',200),(8,'2024-12-06','user1','By Credits',109),(9,'2024-12-06','user1','By Credits',109);
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(15) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `discount_id` varchar(50) DEFAULT NULL,
  `order_history_id` int NOT NULL,
  `invoice_id` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`),
  KEY `discount_id` (`discount_id`),
  KEY `order_history_id` (`order_history_id`),
  KEY `invoice_id` (`invoice_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_account` (`username`),
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`),
  CONSTRAINT `order_ibfk_3` FOREIGN KEY (`order_history_id`) REFERENCES `order_history` (`order_history_id`),
  CONSTRAINT `order_ibfk_4` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`invoice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'user1','Pending Payment',NULL,1,NULL),(2,'user1','Shipping',NULL,2,NULL),(3,'user1','Awaiting Delivery',NULL,3,NULL),(4,'user1','Completed',NULL,4,NULL),(5,'user1','Canceled',NULL,5,NULL),(6,'user1','Refund',NULL,6,NULL),(7,'user1','Completed','BLACKFRIDAY',7,1),(9,'user1','Pending',NULL,11,3),(10,'user1','Pending Payment',NULL,12,4),(11,'user1','Completed',NULL,13,5),(12,'user1','Completed',NULL,14,6),(13,'user1','Pending Payment',NULL,15,7),(14,'user1','Completed',NULL,16,8),(15,'user1','Completed',NULL,17,9);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_history`
--

DROP TABLE IF EXISTS `order_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_history` (
  `order_history_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  PRIMARY KEY (`order_history_id`),
  KEY `username` (`username`),
  CONSTRAINT `order_history_ibfk_1` FOREIGN KEY (`username`) REFERENCES `customer_account` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_history`
--

LOCK TABLES `order_history` WRITE;
/*!40000 ALTER TABLE `order_history` DISABLE KEYS */;
INSERT INTO `order_history` VALUES (1,'user1'),(2,'user1'),(3,'user1'),(4,'user1'),(5,'user1'),(6,'user1'),(7,'user1'),(8,'user1'),(11,'user1'),(12,'user1'),(13,'user1'),(14,'user1'),(15,'user1'),(16,'user1'),(17,'user1');
/*!40000 ALTER TABLE `order_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `book_id` int NOT NULL,
  `order_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`order_id`,`book_id`),
  KEY `order_id` (`order_id`),
  KEY `fk_orderitem_book` (`book_id`),
  CONSTRAINT `fk_orderitem_book` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,1,1),(2,1,2),(3,2,3),(4,3,4),(5,4,5),(6,5,6),(7,6,7),(2,7,3),(5,7,3),(1,9,2),(2,9,1),(3,10,1),(7,10,1),(1,11,2),(2,11,3),(1,12,2),(2,12,3),(7,13,1),(10,13,2),(1,14,2),(2,14,3),(1,15,2),(2,15,3);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publisher`
--

DROP TABLE IF EXISTS `publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher` (
  `publisher_id` int NOT NULL AUTO_INCREMENT,
  `publisher_name` varchar(255) NOT NULL,
  `publisher_email` varchar(255) DEFAULT NULL,
  `publisher_address` text,
  `publisher_phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`publisher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher`
--

LOCK TABLES `publisher` WRITE;
/*!40000 ALTER TABLE `publisher` DISABLE KEYS */;
INSERT INTO `publisher` VALUES (1,'Publisher1',NULL,NULL,NULL),(2,'Forever',NULL,NULL,NULL),(3,'Disney Hyperion',NULL,NULL,NULL),(4,'TBR',NULL,NULL,NULL),(5,'ALFAGUARA',NULL,NULL,NULL),(6,'Paperback',NULL,NULL,NULL),(7,'Simon & Schuster Children\'s UK',NULL,NULL,NULL),(8,'Balzer & Bray',NULL,NULL,NULL),(9,'Electric Monkey',NULL,NULL,NULL),(10,'Riverhead Books',NULL,NULL,NULL),(11,'Crown',NULL,NULL,NULL),(12,'Viking',NULL,NULL,NULL),(13,'S&S/ Marysue Rucci Books',NULL,NULL,NULL),(14,'Flatiron Books',NULL,NULL,NULL),(15,'Poisoned Pen Press',NULL,NULL,NULL),(16,'Sourcebooks Landmark',NULL,NULL,NULL),(17,'Sphere',NULL,NULL,NULL);
/*!40000 ALTER TABLE `publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `series_name` varchar(255) DEFAULT NULL,
  `series_id` int NOT NULL AUTO_INCREMENT,
  `series_description` text,
  PRIMARY KEY (`series_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES ('The City of Fantome',1,NULL),('Twin Crowns Series',2,NULL),('DC Morgan Series',3,NULL);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series_item`
--

DROP TABLE IF EXISTS `series_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series_item` (
  `item_id` int NOT NULL,
  `series_id` int NOT NULL,
  `order_in_series` int NOT NULL,
  PRIMARY KEY (`item_id`),
  KEY `series_id` (`series_id`),
  CONSTRAINT `series_item_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `book` (`book_id`),
  CONSTRAINT `series_item_ibfk_2` FOREIGN KEY (`series_id`) REFERENCES `series` (`series_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series_item`
--

LOCK TABLES `series_item` WRITE;
/*!40000 ALTER TABLE `series_item` DISABLE KEYS */;
INSERT INTO `series_item` VALUES (10,3,1),(15,1,1),(16,2,1),(17,2,2),(18,2,3),(19,2,4),(20,3,2),(21,3,3);
/*!40000 ALTER TABLE `series_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `write`
--

DROP TABLE IF EXISTS `write`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `write` (
  `book_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`book_id`,`author_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `write_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`),
  CONSTRAINT `write_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `write`
--

LOCK TABLES `write` WRITE;
/*!40000 ALTER TABLE `write` DISABLE KEYS */;
INSERT INTO `write` VALUES (11,2),(12,2),(13,3),(1,4),(12,4),(14,4),(15,5),(16,5),(17,5),(18,5),(2,6),(3,7),(13,7),(4,8),(5,9),(6,10),(7,11),(8,12),(9,12),(10,17),(20,17),(21,17),(19,18);
/*!40000 ALTER TABLE `write` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06 23:21:03
