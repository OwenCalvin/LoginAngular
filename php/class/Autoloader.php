<?php
    class Autoloader{
        public static function autoload($className){
            $fileName = $className.'.php';
                require $fileName;
        }

        public static function register(){
            spl_autoload_register(array(__CLASS__, 'autoload'));
        }
    }
?>