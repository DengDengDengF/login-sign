//SafeAreaView ios安全可视区域；TouchableOpacity本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低。
//ScrollView 视图滚动 ;TextInput 输入框
import {SafeAreaView, Text, View, Image, TouchableOpacity, Alert, ScrollView, TextInput} from 'react-native';
import styles from '../assets/styles/Styles';
import {useState} from 'react';

function Login({navigation}) {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    return (<ScrollView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/LOGO.png')}
                       style={styles.headerImg}
                       alt='logo'/>
                <Text style={styles.title}>LOGIN</Text>
                <Text style={styles.subTitle}>Get this app in your hands and fully access</Text>
            </View>
            {/* Forms */}
            <View style={styles.shadowBox}>
                {/* email */}
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput style={styles.inputControl}
                               value={form.email}
                               onChangeText={email => setForm({...form, email})}
                               placeholder="Enter your email"
                               placeholderTextColor="#929292"
                    />
                </View>
                {/* password */}
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.inputControl}
                               value={form.password}
                               onChangeText={password => setForm({...form, password})}
                               placeholder="Enter your passwords"
                               secureTextEntry={true}
                               placeholderTextColor="#929292"
                    />
                </View>
                <View style={styles.fromAction}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <View style={styles.btn}>
                            <Text style={styles.textBtn}>
                                LOGIN
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomTitle}><Text style={styles.bottomTitle}>
                    You don't have a account please </Text>
                    <TouchableOpacity style={styles.btnLink}
                                      onPress={() => navigation.navigate('Sign')}>
                        <Text style={styles.bottomTitle}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cpRight}>
                <Text style={styles.bottomTitle}>
                    All rights reserved  &copy;9999 | AppName | ldf.com</Text>
            </View>
        </View>
    </ScrollView>)
}

export default Login;
