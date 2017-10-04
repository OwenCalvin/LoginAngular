<?php
    class NotEmpty {
        public static function isNotEmpty($array){
            foreach($array as $i){
                if(empty($i)){
                    return true;
                }
            }
            return false;
        }
    }
?>