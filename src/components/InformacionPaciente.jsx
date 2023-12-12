import React from 'react';
import {SafeAreaView, Text, View, Pressable, StyleSheet} from 'react-native';
import Paciente from './Paciente';
import {formatearFecha} from '../helpers';

const InformacionPaciente = ({paciente, setModalPaciente, setPaciente}) => {
  console.log(paciente);
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>informacion Paciente</Text>
      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}>
          <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente: </Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario: </Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono: </Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta: </Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fechaAlta)}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas: </Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  btnCerrar: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 15,
  },
  btnCerrarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 8,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    marginBottom: 3,
  },
  valor: {
    fontWeight: '700',
    fontSize: 22,
  },
});

export default InformacionPaciente;
