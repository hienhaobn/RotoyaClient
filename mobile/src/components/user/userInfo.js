import {
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    ImageBackground,
    Platform,
    View
} from 'react-native';
import React from 'react';
import { Block, Text, theme } from "galio-framework";
import { Button } from "../../components/common";
import { Images, argonTheme } from '../../constants';
import { HeaderHeight } from "../../constants/utils";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/action/auth.action';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
class UserInfoScreen extends React.Component {
    // static navigationOptions = {
    //     // title: 'Info'
    //     headerShown: false
    // }
    render() {
        return (
            <Block flex style={styles.profile}>
                <Block flex>
                    <ImageBackground
                        source={Images.ProfileBackground}
                        style={styles.profileContainer}
                        imageStyle={styles.profileBackground}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ width, marginTop: "10%" }}
                        >
                            <Block flex style={styles.profileCard}>
                                <Block middle style={styles.avatarContainer}>
                                    <TouchableOpacity onPress={() => null}>
                                        <Image
                                            source={{ uri: 'data:image/jpeg;base64,' + this.props.avatar }}
                                            style={styles.avatar}
                                        />
                                    </TouchableOpacity>
                                </Block>
                                <Block style={styles.info}>
                                    <Block
                                        middle
                                        row
                                        space="evenly"
                                        style={{ marginTop: 20, paddingBottom: 24 }}
                                    >
                                        <Button
                                            small
                                            style={{ backgroundColor: argonTheme.COLORS.INFO }}
                                        >
                                            CONNECT
                                        </Button>
                                        <Button
                                            small
                                            style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                                        >
                                            MESSAGE
                                    </Button>
                                    </Block>
                                    <Block row space="between">
                                        <Block middle>
                                            <Text
                                                bold
                                                size={12}
                                                color="#525F7F"
                                                style={{ marginBottom: 4 }}
                                            >
                                                2K
                                            </Text>
                                            <Text size={12}>Orders</Text>
                                        </Block>
                                        <Block middle>
                                            <Text
                                                bold
                                                color="#525F7F"
                                                size={12}
                                                style={{ marginBottom: 4 }}
                                            >
                                                10
                                            </Text>
                                            <Text size={12}>Photos</Text>
                                        </Block>
                                        <Block middle>
                                            <Text
                                                bold
                                                color="#525F7F"
                                                size={12}
                                                style={{ marginBottom: 4 }}
                                            >
                                                89
                                            </Text>
                                            <Text size={12}>Comments</Text>
                                        </Block>
                                    </Block>
                                </Block>
                                <Block flex>
                                    <Block middle style={styles.nameInfo}>
                                        <Text bold size={28} color="#32325D">
                                            {this.props.firstName + ' ' + this.props.lastName}
                                        </Text>
                                        <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                            San Francisco, USA
                                        </Text>
                                    </Block>
                                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                                        <Block style={styles.divider} />
                                    </Block>
                                    <Block middle>
                                        <Text
                                            size={16}
                                            color="#525F7F"
                                            style={{ textAlign: "center" }}
                                        >
                                            An artist of considerable range, Jessica name taken by
                                            Melbourne …
                                        </Text>
                                        <Button
                                            color="transparent"
                                            textStyle={{
                                                color: "#233DD2",
                                                fontWeight: "500",
                                                fontSize: 16
                                            }}
                                        >
                                            Show more
                                        </Button>
                                    </Block>
                                    <Block
                                        row
                                        style={{ paddingVertical: 14, alignItems: "baseline" }}
                                    >
                                        <Text bold size={16} color="#525F7F">
                                            Album
                                        </Text>
                                    </Block>
                                    <Block
                                        row
                                        style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                                    >
                                        <Button
                                            small
                                            color="transparent"
                                            textStyle={{ color: "#5E72E4", fontSize: 12 }}
                                        >
                                            View all
                                        </Button>
                                    </Block>
                                    <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                                        <Block row space="between" style={{ flexWrap: "wrap" }}>
                                            {Images.Viewed.map((img, imgIndex) => (
                                                <Image
                                                    source={{ uri: img }}
                                                    key={`viewed-${img}`}
                                                    resizeMode="cover"
                                                    style={styles.thumb}
                                                />
                                            ))}
                                        </Block>
                                    </Block>
                                </Block>
                            </Block>
                        </ScrollView>
                    </ImageBackground>
                </Block>
            </Block>
        );
    }
}
const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
        // marginBottom: -HeaderHeight * 2,
        flex: 1
    },
    profileContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1,
        marginTop: "15%"
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    profileCard: {
        // position: "relative",
        padding: theme.SIZES.BASE,
        marginHorizontal: theme.SIZES.BASE,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    info: {
        paddingHorizontal: 40
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    divider: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#E9ECEF"
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    }
});

const mapStateToProps = state => ({
    userId: state.loginReducer.id,
    firstName: state.loginReducer.firstName,
    lastName: state.loginReducer.lastName,
    phone: state.loginReducer.phone,
    address: state.loginReducer.address,
    email: state.loginReducer.email,
    avatar: state.loginReducer.avatar
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logoutAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoScreen);