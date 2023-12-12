import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {formatearFecha} from '../helpers';

const Paciente = ({
  item,
  setModalVisible,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente,
  setPaciente,
}) => {
  const {paciente, fechaAlta, id} = item;

  return (
    <Pressable
      onLongPress={() => {
        setModalPaciente(true);
        setPaciente(item);
      }}>
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatearFecha(fechaAlta)}</Text>
        <View style={styles.contenedorBotones}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onLongPress={() => {
              setModalVisible(true);
              pacienteEditar(id);
            }}>
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>
          <Pressable
            onLongPress={() => {
              pacienteEliminar(id);
            }}
            style={[styles.btn, styles.btnEliminar]}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBlockColor: '94a3b8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    marginBottom: 10,
    color: '#274151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});

export default Paciente;
