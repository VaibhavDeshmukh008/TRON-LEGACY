var INT = 1;
var INTRO = 2;
var PLAY = 3;
var END = 4; 
var gamestate = INT;
var background1;
var background1image;
var hero;
var herorun; 
var herojump;
var score = 0;
var points = 0;
var laser1;
var laser1image; 
var level;
var floor1;
var floor1image;
var menu;
var menuimage;
var restart;
var restartimage;
var logo;
var logoimage;
var intro;
var introimage;
var introtime = 0;
var sw;
var swimage;
var efloor;
var efloorimage;
var e;
var command; 
var gameover;
var gameoverimage;
var guntime = 0;
var gun2a;
var gun2b
var gun1image;
var gun1;
var gun2image;
var magnet;
var magnetimage;
var shielda;
var shieldb;
var shieldimage;
var lives = 3; 
var life1;
var life1image;
var life2;
var life2image;
var life3;
var life3image;
var lifetime = 0;
var bullets = 0;
var laser;
var laserimage;
var shieldtime = 0;
var jumptime = 3;
var magnettime = 0; 
var shield1;
var commanding;
var command1;
var score = 0;
var villain1;
var villain1image;
var villain2;
var villain2image;
var vcommand;
var bomb;
var bombimage
var flame1;
var flame2;
var flameimage;
var fire1time = 0;
var fire2time = 0;
var con = 0;
var v2hit = 0;
var points = 0;
var delay = 4;
var lifer = 350;
var flame3;
var spacer;
var spacer1;
var skip;
var skipimage;
var difficult1
var difficult1image;
var difficult2
var difficult2image;
var difficult3
var difficult3image;
var logoshow;
var logoshowimage;
var restartbutton;
var menubutton;
var restartmenuimage;
var restart;
var restartimage;
var menu1;
var menuimage;
var hardy1 = 20; 
var hardy2 = 100;
var bmg1;
var touch;
var jumpsound;
var lasersound;
var villainsound;
var herosound;
var hbsound;
var ssound;
var esound;
var sisound;
var gsound;
var error;
var gsound;
var gunsound;
var welcome;
var welcomeimage;
var text1;
var text1image;
var text2;
var text2image;
var text3;
var text3image;
var text4;
var text4image;
var text5;
var text5image;
var bygsp;
var bygspimage;

function preload()
{
 herorun =loadAnimation("herorun1.png","herorun2.png","herorun3.png","herorun4.png","herorun5.png","herorun6.png","herorun7.png","herorun8.png","herorun9.png");
 background1image = loadImage("bg444.jpg");
 floor1image = loadImage("bg111.png");
 introimage = loadImage("intro.png");
 logoimage = loadImage("logo.png"); 
 swimage = loadImage("20.png");
 efloorimage = loadAnimation("bg1111.png","bg1112.png","bg1113.png","bg1114.png");
 magnetimage = loadImage("magnet.png");
 gun1image = loadImage("magazine.png");
 gun2image = loadImage("magazine1.png");
 shieldimage = loadImage("energyshield.png");
 herojump = loadAnimation("herojump.png");
 life1image = loadImage("herorun3.png");
 life2image = loadImage("herorun4.png");
 life3image = loadImage("herorun5.png");  
 laserimage = loadImage("bluelaser1.png");
 villain1image = loadImage("villain11.png") 
 villain2image = loadImage("villain12.png") 
 flameimage = loadAnimation("burst11.png","burst12.png","burst13.png","burst14.png","burst15.png"); 
 bombimage = loadImage("realbomb.png"); 
 skipimage = loadImage("skip.jpg");  
 gameoverimage = loadImage("gameover.png");  
 difficult1image = loadImage("hard.png");
 difficult2image = loadImage("medium.png");
 difficult3image = loadImage("easy.png"); 
 logoshowimage = loadImage("20.png");
 restartmenuimage = loadImage("button.png");
 restartimage = loadImage("restart2.png")
 menuimage = loadImage("menu2.png");
 bgm1 = loadSound("gamesound1.mp3");
 touch = loadSound("touch.wav");
 jumpsound = loadSound("jump.mp3");
 lasersound = loadSound("blue laser.mp3");
 villainsound = loadSound("small explosion.mp3");
 hbsound = loadSound("huge explosion.mp3"); 
 ssound = loadSound("energy shield.mp3"); 
 esound = loadSound("ufo pass.mp3");
 sisound = loadSound("shield1.mp3");
 error = loadSound("error.mp3");
 gunsound = loadSound("gun.mp3");
 welcomeimage = loadImage("welcome.png");
 text1image = loadImage("up.png");
 text2image = loadImage("space.png");
 text3image = loadImage("4jump.png");
 text4image = loadImage("magnetups.png");
 text5image = loadImage("supplies.png"); 
 bygspimage = loadImage("bygsp1.png");
}

function setup()
{
 createCanvas(700,500);   
  
 fgroup = new Group();
 efgroup = new Group();
 egroup = new Group();
 g2agroup = new Group();
 g2bgroup = new Group();
 g1group = new Group();
 sagroup = new Group();
 sbgroup = new Group();
 lgroup = new Group();
 mgroup = new Group(); 
 v1group = new Group();
 v2group = new Group(); 
 bgroup = new Group();
 f1group = new Group();
 f2group = new Group(); 
 f3group = new Group();
  
 background1 = createSprite(width/0.5,height/2);
 background1.addImage(background1image);
 background1.scale = 0.98;
 background1.velocityX = -5; 
  
 life1 = createSprite(650,35,20,20);
 life1.addImage(life1image); 
 life1.scale = 0.27; 
  
 life2 = createSprite(604,35,20,20);
 life2.addImage(life2image); 
 life2.scale = 0.27;   
  
 life3 = createSprite(557,35,20,20);  
 life3.addImage(life3image); 
 life3.scale = 0.27;  
  
 level = createSprite(width/2,height/1.2,width,10); 
 level.visible = false; 
  
 level1 = createSprite(width/2,height/1.2,width,20); 
 level1.visible = false;  
  
 intro = createSprite(350,280,20,20);
 intro.addImage(introimage); 
 intro.rotation = intro.rotation+90;
 intro.scale = 1.7;    
 intro.visible = false;
  
 sw = createSprite(350,250,20,20);
 sw.addImage(swimage); 
 sw.scale = 1;
 sw.visible = false;
  
 logo = createSprite(350,200,20,20);
 logo.addImage(logoimage); 
 logo.rotation = logo.rotation+90;
 logo.scale = 1.7;   
 logo.visible = false; 
  
 hero = createSprite(width/8,height/2,20,20);
 hero.addAnimation("running",herorun);
 hero.addAnimation("jumping",herojump);
 hero.setCollider("rectangle",0,0,80,140);
 hero.debug = false;
 hero.scale = 0.45;
 hero.frameDelay = 2;

 shield1= createSprite(width/8,height/2,20,20);
 shield1.addImage(shieldimage);
 shield1.setCollider("circle",0,0,270);
 shield1.debug = false;
 shield1.scale = 0.2;
 shield1.visible = false;
   
 skip= createSprite(width/1.1,height/1.1,20,20);
 skip.addImage(skipimage);
 skip.setCollider("circle",0,0,125);
 skip.debug = false;
 skip.scale = 0.15;
 
 gameover= createSprite(width/2,height/2.5,20,20);
 gameover.addImage(gameoverimage);
 gameover.depth = 20;
 gameover.scale = 1;  
  
 difficult1 = createSprite(width/2,height/1.65,20,20);
 difficult1.addImage(difficult3image);
 difficult1.setCollider("rectangle",0,0,320,100);
 difficult1.debug = false;
 difficult1.scale = 0.3;  
  
 difficult2 = createSprite(width/2,height/2,20,20);
 difficult2.addImage(difficult2image);
 difficult2.setCollider("rectangle",0,0,460,100);
 difficult2.debug = false;
 difficult2.scale = 0.3;  
  
 difficult3 = createSprite(width/2,height/2.55,20,20);
 difficult3.addImage(difficult1image);
 difficult3.setCollider("rectangle",0,0,320,90);
 difficult3.debug = false;
 difficult3.scale = 0.3; 
  
 
 restartbutton = createSprite(width/2,height/1.45,20,20);
 restartbutton.addImage(restartmenuimage);
 restartbutton.setCollider("circle",0,0,85);
 restartbutton.debug = false;
 restartbutton.scale = 0.5;  
  
 menubutton = createSprite(width/2,height/1.1,20,20);
 menubutton.addImage(restartmenuimage);
 menubutton.setCollider("circle",0,0,85);
 menubutton.debug = false;
 menubutton.scale = 0.5;   
  
 menu1 = createSprite(width/2,height/1.1,20,20);
 menu1.addImage(menuimage);
 menu1.scale = 0.2;     
  
 restart = createSprite(width/2,height/1.45,20,20);
 restart.addImage(restartimage);
 restart.scale = 0.2;    

 logoshow = createSprite(width/1.95,height/4.55,20,20);
 logoshow.addImage(logoshowimage);
 logoshow.scale = 0.7;  

 text1 = createSprite(width/6.7,height/2.65,20,20);
 text1.addImage(text1image);
 text1.scale = 0.2;     
   
 text2 = createSprite(width/7.5,height/2.4,20,20);
 text2.addImage(text2image);
 text2.scale = 0.2;      
  
 text3 = createSprite(width/8.5,height/2,20,20);
 text3.addImage(text3image);
 text3.scale = 0.2;      
  
 text4 = createSprite(width/5.5,height/2.2,20,20);
 text4.addImage(text4image);
 text4.scale = 0.2;      
  
 text5 = createSprite(width/6.68,height/1.85,20,20);
 text5.addImage(text5image);
 text5.scale = 0.2;   
  
 welcome = createSprite(width/1.95,height/11,20,20);
 welcome.addImage(welcomeimage);
 welcome.scale = 0.2;   
  
 bygsp = createSprite(width/1.95,height/8,20,20);
 bygsp.rotation = bygsp.rotation+90;
 bygsp.addImage(bygspimage);
 bygsp.scale = 1.3;   
 
 bgm1.play();
  
 var shieldtime = 0;
 var bullets = 0;
 var lifetime = 0;
 var jumptime = 3;
 var magnettime = 0;
 var score = 0;
 var fire1time = 0;
 var fire2time = 0;
 var con = 0;
 var v2hit  = 0;
 var points = 0;
 var delay = 4;
 var lifer = 250;
 var hardy1 = 5; 
 var hardy2 = 100;
}

function draw()
{
 background("grey");
 drawSprites();
  
 shield1.y = hero.y; 
 shield1.x = hero.x;  
 hero.x  = shield1.x;
 hero.y = shield1.y;
  
  if(frameCount%40 === 0)
  {
   delay = delay - 0.003  
  }

  if(gamestate === INTRO)
  {
   text1.visible = true; 
   text2.visible = true; 
   text3.visible = true;
   text4.visible = true;
   text5.visible = true;
   welcome.visible = true;
  }else
  {
   text1.visible = false; 
   text2.visible = false; 
   text3.visible = false;
   text4.visible = false;
   text5.visible = false;
   welcome.visible = false;    
  }
  
  if(gamestate === INT)
  {
   bygsp.visible = true; 
  }else
  {
   bygsp.visible = false; 
  }
  
 if(gamestate === INT)
 {
  menu1.visible = false; 
  menubutton.visible = false; 
  restart.visible = false; 
  restartbutton.visible = false; 
  logoshow.visible = false;
  gameover.visible = false;
  background1.velocityX = 0;
  hero.visible = false; 
  intro.visible = true;
  logo.visible = true;
  sw.visible = false; 
  skip.visible = true;  
  life1.visible = false;
  life2.visible = false; 
  life3.visible = false; 
  difficult1.visible = false; 
  difficult2.visible = false; 
  difficult3.visible = false;
  
  if(frameCount%0.5 === 0)
  {
  intro.scale = intro.scale-0.01;
  logo.scale = logo.scale-0.01;
  intro.rotation = intro.rotation-0.8;
  logo.rotation = logo.rotation-0.8; 
  bygsp.rotation = bygsp.rotation-0.8;  
  bygsp.scale = bygsp.scale-0.01;  
  }
  
  if(intro.rotation<0.4)
  {
  intro.rotation = intro.rotation+0.8;
  logo.rotation = logo.rotation+0.8;
  intro.scale = intro.scale+0.011;
  logo.scale = logo.scale+0.011;
  bygsp.scale = bygsp.scale+0.011;  
  bygsp.rotation = bygsp.rotation+0.8;    
  }
    
  if(frameCount%18 === 0 && introtime<13) 
  {
   introtime++;
  }
 
  if(introtime>8)
  {
   logo.visible = false
   intro.visible = false;
   sw.visible = true;
  
   if(frameCount%0.5 === 0)
   {
    sw.scale = sw.scale+0.001;
   }
  }
 
  skip.onMouseOver = function()
  {
     skip.scale = 0.18;
  }
  
  skip.onMouseOut = function()
  {
    skip.scale = 0.15;
  }
  
  skip.onMousePressed = function()   
  {
     if(skip.visible === true)
    {
      gamestate = INTRO;
    }
  }
  
  if(introtime === 13)
  {
   gamestate = INTRO;
  }   
 }

 if(gamestate === INTRO)
 {
   menu1.visible = false; 
   menubutton.visible = false; 
   restart.visible = false; 
   restartbutton.visible = false;    
   logoshow.visible = true;
   gameover.visible = false;
   hero.visible = false;
   shield1.visible = false;
   difficult1.visible = true;
   difficult2.visible = true;
   difficult3.visible = true;
   skip.visible = false;
   life1.visible = false;
   life2.visible = false; 
   life3.visible = false; 
   logo.visible = false; 
   intro.visible = false;
   sw.visible = false;
  
  background1.x = width/8;
  background1.y = height/2; 
   
  background1.velocityX = 0; 

  difficult1.onMouseOver = function()
  {
    difficult1.scale = 0.35;
  } 
  
  difficult1.onMouseOut = function()
  {
    difficult1.scale = 0.3;
  }
  
  difficult2.onMouseOver = function()
  {
    difficult2.scale = 0.35;
  } 
  
  difficult2.onMouseOut = function()
  {
    difficult2.scale = 0.3;
  }  

  difficult3.onMouseOver = function()
  {
    
    difficult3.scale = 0.35;
  } 
  
  difficult3.onMouseOut = function()
  {
    difficult3.scale = 0.3;
  }  
}
  
  difficult1.onMousePressed = function()
  {
   if(difficult1.visible === true)
   { 
   touch.play();
   gamestate = PLAY; 
   hardy1 = 15;
   hardy2 = 105;
   }  
  }  
  
  difficult2.onMousePressed = function()
  {
   if(difficult2.visible === true)
   { 
   touch.play();
   gamestate = PLAY;
   hardy1 = 23;
   hardy2 = 110;
   }  
  }  
   
  difficult3.onMousePressed = function()
  {
   if(difficult3.visible === true)
   { 
   touch.play();
   gamestate = PLAY;
   hardy1 = 20;
   hardy2 = 115;
   }  
  }  
  
 if(gamestate === PLAY)
 {
  menu1.visible = false; 
  menubutton.visible = false; 
  restart.visible = false; 
  restartbutton.visible = false;   logoshow.visible = false;
  life1.visible = true; 
  life2.visible = true; 
  life3.visible = true; 
  skip.visible = false;
  intro.visible = false;
  logo.visible = false; 
  sw.visible = false;
  hero.visible = true;
  difficult1.visible = false;
  difficult2.visible = false; 
  difficult3.visible = false; 
  gameover.visible = false; 
  shield1.y = hero.y; 
  shield1.x = hero.x;  
  hero.x  = shield1.x;
  hero.y = shield1.y;

  score = score + Math.round(frameCount%60);
   
  if(shieldtime>0)
  {
    shield1.visible = true;
  }
    
  if(shieldtime===0)
  {
    shield1.visible = false;
  } 
    
  if(shield1.visible === true)
  {
   shield1.rotationSpeed = 140; 
   shield1.bounceOff(egroup);
     
   if(shield1.isTouching(egroup))
   {
   esound.play();
   shield1.y = e.y-70;
   hero.y = hero.y-70;
   }   
  } 
    
    strokeWeight(2);
    stroke("green")
    fill("white");
    textFont("castellar");
    textSize(18);
    text("lives: ",470,35);

    strokeWeight(2);
    stroke("green")
    fill("white");
    textFont("castellar");
    textSize(15);
    text("shield time: "+shieldtime,200,440);   
    
    strokeWeight(2);
    stroke("green")
    fill("white");
    textFont("castellar");
    textSize(15);
    text("bullets: "+bullets,20,490);    
    
    strokeWeight(2);
    stroke("green")
    fill("white");
    textFont("castellar");
    textSize(15);
    text("jumps: "+jumptime,20,440);    
    
    strokeWeight(2);
    stroke("green")
    fill("white");
    textFont("castellar");
    textSize(15);
    text("magnet time: "+magnettime,20,465);    
   background1.velocityX = -(delay+(score/10000));  
  
   if(background1.x<400)
   {
    background1.x = width/0.5;
   }
  
   hero.velocityY = hero.velocityY + 0.6
   hero.collide(level);
  
   if(keyWentDown("space"))
   {
    jumptime = jumptime-1;    
   } 
    
   if(mouseIsPressed)
   {
    jumptime = jumptime-1;
   }
    
   if(frameCount%15 === 0 && shieldtime>0)
   {
    shieldtime--;
   }  
    
   if(hero.isTouching(level1))
   {
    con = 1;
   }else
   {
    con = 2;
   }
    
   if(keyWentDown("space"))
   {
     if(jumptime>-1 && jumptime<4)
     {  
       jumpsound.play();
       hero.velocityY = -9;
     }   
   }
  
   if(keyDown("space"))
   {
    hero.changeAnimation("jumping",herojump); 
   }else
   {
     hero.changeAnimation("running",herorun);
   } 
   
   var vcommand = Math.round(random(1,4))
  
   if(frameCount%hardy2 === 0) 
   {
    if(vcommand == 1)
    {
     villain1 = createSprite(700,height/1.34,20,20);
     villain1.setCollider("rectangle",0,0,100,200);
     villain1.debug = false;
     villain1.addImage(villain1image);
     villain1.scale = 0.4;
     villain1.velocityX = -(delay+(score/10000));
     villain1.lifetime = lifer;
     v1group.add(villain1);
    
     flame1 = createSprite(20,20,20,20);
     flame1.addAnimation('flame',flameimage);
     flame1.scale = 1;
     flame1.visible = false;
     flame1.velocityX = -(delay+(score/10000));
     flame1.x = villain1.x;
     flame1.y = villain1.y;
     flame1.frameDelay = 2; 
     flame1.lifetime = lifer;
     f1group.add(flame1);
    
     if(fire1time===0)
     {
      flame1.visible = false;
     }else
     {
      flame1.visible = true;
     }    
    }
    
    if(vcommand == 2)
    {
     villain2 = createSprite(700,height/1.33,20,20);
     villain2.setCollider("rectangle",0,0,100,200);
     villain2.debug = false;
     villain2.addImage(villain2image);
     villain2.scale = 0.4;
     villain2.velocityX = -(delay+(score/10000));   
     villain2.lifetime = lifer;
     v2group.add(villain2);
    
     flame2 = createSprite(20,20,20,20);
     flame2.addAnimation('flame1',flameimage);
     flame2.scale = 1;
     flame2.visible = false;
     flame2.velocityX = -(delay+(score/10000));
     flame2.x = villain2.x;
     flame2.y = villain2.y;
     flame2.frameDelay = 2; 
     flame2.lifetime = lifer;
     f2group.add(flame2);
          
     if(fire2time===0)
     {
      flame2.visible = false; 
     }else
     {
      flame2.visible = true;
     }   
  
    }
  
    if(vcommand == 3)
    {
     bomb = createSprite(700,height/1.33,20,20);
     bomb.setCollider("rectangle",0,0,600,200);
     bomb.debug = false;
     bomb.addImage(bombimage);
     bomb.scale = 0.05;
     bomb.velocityX = -(delay+(score/10000));  
     bomb.lifetime = lifer;
     bgroup.add(bomb);   
    
    flame3 = createSprite(20,20,20,20);
    flame3.addAnimation('flame1',flameimage);
    flame3.scale = 3;
    flame3.visible = false;
    flame3.velocityX = -(delay+(score/10000));
    flame3.x = bomb.x;
    flame3.y = bomb.y;
    flame3.frameDelay = 2; 
    flame3.lifetime = lifer;
    f2group.add(flame3);
    }
   
    if(vcommand == 4)
    {
      var spacer = createSprite(20,20,20,20)
      spacer.lifetime = 10;
      spacer.visible = false;
    }  
   }   
    
     if(lgroup.isTouching(v2group))
     {
      laser.destroy();
      villainsound.play();
      fire2time = fire2time+1;
      villain2.destroy();
      if(fire2time>0)
      { 
       flame2.visible = true;
       fire2time = fire2time+2;
      }      
     } 
  
   if(lgroup.isTouching(v1group))
     {
      laser.destroy();
      v2hit = v2hit+1;
      points = points+1;
      fire1time = fire1time+1;
     } 

   if(v2hit==2)
   {
    villain1.destroy(); 
    villainsound.play();
    v2hit = 0;
    points = points+2;
    if(fire1time>0)
    {
     flame1.visible = true;
    }
    fire1time = fire1time+1;
   }
    
   if(frameCount%5 === 0 && fire1time>0 && flame1.visible === true)
   {
    fire1time--; 
   }
   
   if(frameCount%5 === 0 && fire2time>0 && flame2.visible === true)
   {
    fire2time--; 
   }   
  
   if(hero.isTouching(level1))
    {
     jumptime = 3;
    } 
  
    if(hero.isTouching(fgroup)||hero.isTouching(efgroup))
    {
     jumptime = 4;
    } 
    
    var commanding = Math.round(random(1,2))
  
    if(World.frameCount%hardy1 === 0)  
    {
     if(commanding == 1)
     {
      if(frameCount%110 === 0)  
      {
       floor1 = createSprite(800,Math.round(random(150,350)),20,20);
       floor1.setCollider("rectangle",0,0,1040,90);
       floor1.debug = false;
       floor1.addImage(floor1image);
       floor1.scale = 0.2;
       floor1.velocityX = -(delay+(score/10000));
       floor1.lifetime = lifer;
       fgroup.add(floor1);
  
       command = Math.round(random(1,3)) 
  
       if(command == 1)
       {
        gun2a = createSprite(20,20,20,20)
        gun2a.addImage(gun1image); 
        gun2a.setCollider("rectangle",0,0,500,440);
        gun2a.debug = false;
        gun2a.scale = 0.05; 
        gun2a.x = floor1.x; 
        gun2a.y = floor1.y-55; 
        gun2a.velocityX = -(delay+(score/10000));
        gun2a.lifetime = lifer;
        g2agroup.add(gun2a);
       } 
    if(command == 2)
    {
     shielda = createSprite(20,20,20,20);
     shielda.addImage(shieldimage);
     shielda.setCollider("circle",0,0,200);
     shielda.debug = false;
     shielda.scale = 0.06;
     shielda.x = floor1.x;
     shielda.y = floor1.y-55; 
     shielda.velocityX = -(delay+(score/10000));
     shielda.lifetime = lifer;
     sagroup.add(shielda);
     }
    if(command == 3)
    {
     if(score>70000)
     { 
     magnet = createSprite(20,20,20,20); 
     magnet.addImage(magnetimage);
     magnet.setCollider("circle",0,0,230);
     magnet.debug = false;
     magnet.scale = 0.04;
     magnet.x = floor1.x;
     magnet.y = floor1.y-70;
     magnet.velocityX = -(delay+(score/10000));
     magnet.lifetime = lifer;
     mgroup.add(magnet); 
     }else
      {
       gun2a = createSprite(20,20,20,20)
        gun2a.addImage(gun1image); 
        gun2a.setCollider("rectangle",0,0,500,440);
        gun2a.debug = false;
        gun2a.scale = 0.05; 
        gun2a.x = floor1.x; 
        gun2a.y = floor1.y-55; 
        gun2a.velocityX = -(delay+(score/10000));
        gun2a.lifetime = lifer;
        g2agroup.add(gun2a); 
      }    
    }
   }
  }
     if(commanding == 2)
    {
     if(frameCount%90 === 0)  
     {
      efloor = createSprite(800,Math.round(random(130,350)),20,20);
      efloor.setCollider("rectangle",0,0,1100,140);
      efloor.debug = false;
      efloor.addAnimation('efloor',efloorimage);
      efloor.frameDelay = 2;
      efloor.scale = 0.2;
      efloor.velocityX = -(delay+(score/10000));
      efloor.lifetime = lifer;
      efgroup.add(efloor);
  
      e = createSprite(30,15,180,2);
      e.setCollider("rectangle",0,0,150,5);
      e.debug = false;
      e.lifetime = lifer;
      e.x = efloor.x
      e.y = efloor.y+15;
      e.velocityX = -(delay+(score/10000));
      e.visible = false;  
     
      egroup.add(e);  
  
  command1 = Math.round(random(1,3)) 
  
  if(command1 == 1)
  {
   gun2b = createSprite(20,20,20,20)
   gun2b.addImage(gun1image); 
   gun2b.setCollider("rectangle",0,0,500,440);
   gun2b.debug = false;
   gun2b.scale = 0.05; 
   gun2b.x = efloor.x; 
   gun2b.y = efloor.y-55; 
   gun2b.velocityX = -(delay+(score/10000));
   gun2b.lifetime = lifer;
   g2bgroup.add(gun2b);
  } 
  if(command1 == 2)
  {
   shieldb = createSprite(20,20,20,20);
   shieldb.addImage(shieldimage);
   shieldb.setCollider("circle",0,0,200);
   shieldb.debug = false;
   shieldb.scale = 0.06;
   shieldb.x = efloor.x;
   shieldb.y = efloor.y-55; 
   shieldb.velocityX = -(delay+(score/10000));
   shieldb.lifetime = lifer;
   sbgroup.add(shieldb);
  }  
   if(command1 == 3)
   {
    gun1 = createSprite(20,20,20,20)
    gun1.addImage(gun2image); 
    gun1.setCollider("rectangle",0,0,1500,500);
    gun1.debug = false;
    gun1.scale = 0.04; 
    gun1.x = efloor.x; 
    gun1.y = efloor.y-55; 
    gun1.velocityX = -(delay+(score/10000));
    gun1.lifetime = lifer;
    g1group.add(gun1);
   } 
  }
 }
} 
    
  hero.collide(fgroup);
  hero.collide(efgroup);
  hero.x = width/8;
  
  if(hero.isTouching(g2agroup))
  {
    gunsound.play();
    gun2a.destroy();
    bullets = bullets + 5;  
  }
    
  if(hero.isTouching(g2bgroup))
  {
    gunsound.play();
    gun2b.destroy();
    bullets = bullets+5;
  } 
    
  if(hero.isTouching(g1group))
  {
    gunsound.play();
    gun1.destroy();
    bullets = bullets+10;
  }
   
   if(hero.isTouching(sagroup))
  {
    sisound.play();
    shielda.destroy();
    shieldtime = shieldtime + 15;
  }  
    
  if(hero.isTouching(sbgroup))
  {
    sisound.play();
    shieldb.destroy();
    shieldtime = shieldtime + 15;
  }   
   
   if(hero.isTouching(bgroup))
   {
     hbsound.play();
     bomb.destroy();
     flame3.visible = true;
     hero.x = width/8;
     hero.y = -50;    
     lifetime = lifetime+1;
   }
   
   if(hero.isTouching(egroup))
   {
    if(shield1.visible === false)  
    {
     lifetime = lifetime+1; 
    }
   }
   
   
   if(hero.isTouching(v1group) || hero.isTouching(v2group))
  {
   lifetime = lifetime+1;
  }
  
  if(lifetime === 1 || lifetime>1)
  {
   life1.visible = false; 
  }
    
  if(lifetime === 2 || lifetime>2)
  {
   life2.visible = false;
  }  
  
  if(lifetime === 3 || lifetime>3)
  {
   life3.visible = false;
  }  
    
  if(life3.visible === false  )
  {
   gamestate = END; 
  }
 
  if(hero.isTouching(egroup) || hero.isTouching(v1group) || hero.isTouching(v2group))
  {
    error.play();
    hero.x = width/8;
    hero.y = -50;
  }  
    
  if(keyWentDown(UP_ARROW) && bullets>0)
  {
    bullets--;
  }
    
  if(keyWentDown(UP_ARROW))
  {
    if(bullets>0)
    {
     laser = createSprite(200,200,20,20);  
     laser.setCollider("rectangle",0,0,800,200)
     laser.debug = false;
     laser.addImage(laserimage);
     laser.scale = 0.02;
     laser.x = hero.x;
     laser.y = hero.y;
     laser.velocityX = 15;
     laser.lifetime = 45;
     lgroup.add(laser);
     lasersound.play();
    }
  }  
        
   if(hero.isTouching(mgroup))
   {
    sisound.play();
    magnettime = 15;
    magnet.destroy();
   } 
   
   if(magnettime>0)
   {
    if(frameCount%60 === 0 )
    {
     magnettime = magnettime-1;
    }
   }   
    
   if(magnettime<15 && magnettime>0)
   {
    gun1.x = hero.x;
    gun1.y = hero.y;
    gun2a.x = hero.x;
    gun2a.y = hero.y;   
    gun2b.x = hero.x;
    gun2b.y = hero.y;      
    shielda.x = hero.x;
    shielda.y = hero.y;   
   } 
    
   if(shield1.isTouching(v1group))
   {
     if(shield1.visible === true)
     {
     villainsound.play();
     points = points+1;
     villain1.destroy();
     flame1.visible = true;
     }   
    }
    
   if(shield1.isTouching(v2group))
   {
     if(shield1.visible === true)
     {
     villainsound.play();
     points = points+1;
     villain2.destroy();
     flame2.visible = true;
     }   
    }
     
   textSize(25);
   text("points: "+points,200,480);
   textSize("25");
   text("score: "+score,360,445);   
  }   
  
  if(gamestate === END)
  {
   gameover.visible = true;
   hero.visible = false;
   shield1.visible = false;
   menu1.visible = true; 
   menubutton.visible = true; 
   restart.visible = true; 
   restartbutton.visible = true;     
   difficult1.visible = false;
   difficult2.visible = false;
   difficult3.visible = false; 
   skip.visible = false; 
    
    hero.collide(level);
    background1.velocityX = -(delay+(score/10000));  
  
   if(background1.x<400)
   {
    background1.x = width/0.5;
   }
  
   restartbutton.onMouseOver = function()
   {
    restartbutton.scale = 0.55; 
    restart.scale = 0.25;
   }
  
   menubutton.onMouseOver = function()
   {
    menubutton.scale = 0.55; 
    menu1.scale = 0.25;
   }  
  
   restartbutton.onMouseOut = function()
   {
    restartbutton.scale = 0.5; 
    restart.scale = 0.2;
   }
  
   menubutton.onMouseOut = function()
   {
    menubutton.scale = 0.5; 
    menu1.scale = 0.2;
   }    
  
  menubutton.onMousePressed = function()
  {
    if(menubutton.visible === true)
    {
      touch.play();
      menu();
    }   
  }
  
  restartbutton.onMousePressed = function()
  {
    if(restartbutton.visible === true)
    {
      touch.play();
      reset();
    }   
   }  
  }
}


function reset()
{
 gamestate = PLAY;
 score = 0;
 points = 0;
 lifetime = 0;
 background1.x = width/0.5;
 background1.y = height/2; 
 magnettime = 0;
 jumptime = 3; 
 shieldtime = 0;
 bullets = 0; 
 hero.x = width/8;
 hero.y = -50;
 v1group.destroyEach();
 v2group.destroyEach();
 sagroup.destroyEach();
 sbgroup.destroyEach();
 egroup.destroyEach();
 fgroup.destroyEach();
 efgroup.destroyEach();
 g2agroup.destroyEach();
 g2bgroup.destroyEach();
 g1group.destroyEach(); 
}


function menu()
{
 gamestate = INTRO;
 score = 0; 
 lifetime = 0;
 score = 0;
 points = 0;
 background1.x = width/0.5;
 background1.y = height/2; 
 magnettime = 0;
 jumptime = 3; 
 shieldtime = 0;
 bullets = 0; 
 hero.x = width/8;
 hero.y = -50;
}
