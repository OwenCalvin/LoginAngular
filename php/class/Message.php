<?php
    class Message{
        public function setMessage($status, $message = null, $data = null) {
            $this->status = $status;
            $this->message = $message;
            $this->data = $data;
        }

        public function getJSON(){
            return json_encode($this);
        }

        public function setSuccess($data = null) {
            $this->setMessage('success', null, $data);
        }
    }
?>