import React, {useState, useEffect} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
  paciente: pacienteObj,
  setPaciente: setPacienteFunc,
}) => {
  const [id, setId] = useState('');
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [fechaAlta, setFechaAlta] = useState(new Date());

  useEffect(() => {
    if (Object.keys(pacienteObj).length > 0) {
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setSintomas(pacienteObj.sintomas);
      setFechaAlta(pacienteObj.fechaAlta);
    }
  }, [pacienteObj]);

  const handleNuevaCita = () => {
    if ([paciente, propietario, email, fechaAlta, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [
        {text: 'Cancelar'},
        {text: 'OK'},
      ]);
      return;
    }

    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      telefono,
      fechaAlta,
      sintomas,
    };

    if (id) {
      nuevoPaciente.id = id;
      const pacienteActualizados = pacientes.map(pacienteState =>
        pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState,
      );

      setPacientes(pacienteActualizados);
      setPacienteFunc({});
    } else {
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    resetForm();
  };

  const resetForm = () => {
    setId('');
    setModalVisible(!modalVisible);
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFechaAlta(new Date());
    setSintomas('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            {pacienteObj.id ? 'Editar' : 'Nueva'} Cita
          </Text>
          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => {
              setModalVisible(!modalVisible);
              setPacienteFunc({});
              resetForm();
            }}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={8}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fechaAlta}
                onDateChange={setFechaAlta}
                locale="es"
              />
            </View>
          </View>
          <View style={[styles.campo, styles.campoSintomas]}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.inputSintomas]}
              placeholder="Sintomas Paciente"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleNuevaCita}>
            <Text style={styles.btnNuevaCitaTexto}>
              {pacienteObj.id ? 'Editar ' : 'Agregar '}Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  campoSintomas: {
    paddingBottom: 50,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  inputSintomas: {
    height: 100,
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default Formulario;
