<?php

interface IInscricaoRepository {
    public function save($inscricao);
    public function find($id);
    public function delete($id);
}