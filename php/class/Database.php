<?php
    class Database {
        public static function execute($conn, $req, $values = null) {
            $request = $conn->prepare($req);
            $request->execute($values);
            return $request;
        }

        public static function isEmptyExecute($conn, $req, $values = null) {
            return self::isEmptyRes(self::execute($conn, $req, $values));
        }

        public static function isEmptyRes($res) {
            return $res->rowCount() <= 0;
        }
        
        public static function getConnection(){
            return new PDO('mysql:host=localhost;dbname=weighty', 'root', 'root');
        }
    }
?>