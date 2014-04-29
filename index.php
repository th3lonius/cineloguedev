<!DOCTYPE html>
<html>
<head>
    <title>Cinelogue</title>
<!-- #Mobile Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1,  maximum-scale=1">

<!-- #HTML5 Support -->
    <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

<!-- #Scripts -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <script type="text/javascript" src="//use.typekit.net/bce2hnh.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <script src="js/scripts.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/widows.js"></script>

<!-- #Stylesheets -->
    <link href="css/style.css" rel="stylesheet" type="text/css" media="screen,projection" />
    <link href="css/article.css" rel="stylesheet" type="text/css" media="screen,projection" />

</head>

<body>

    <section class="current">

        <?php include('current-issue.html'); ?>

    </section>

    <aside id="signin">
        <a href="#"><img src="img/twitter.svg" />Sign in with Twitter</a>
    </aside>

    <div class="wrapper">

        <?php include('navigation.html'); ?>

        <section id="content">

        <?php include('recent-articles.html'); ?>

        </section>

    </div><!-- /wrapper -->



    <script src="js/backstretch.min.js"></script>
    <script id="backStretch">
  $("#bronson").hover(function(e) {
    e.preventDefault();
    $.backstretch('http://www.redcarpetcrash.com/wp-content/uploads/2013/01/2009_bronson_004.jpg');
  });

  $("#anatomy").hover(function(e) {
    e.preventDefault();
      $.backstretch('http://timebulleteer.files.wordpress.com/2010/10/tumblr_l9ujgfcckf1qdz6oko1_1280.jpg');
  });
    </script>

</body>
</html>