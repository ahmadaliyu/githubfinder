import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";

const DisplayOrgsScreen = ({ route, navigation: { goBack } }) => {
  const data = route.params.data;

  if (Array.isArray(data) && data.length == 0) {
    return (
      <View style={styles.noItem}>
        <AppText
          title={"You don't belong to any Organization"}
          style={{ marginVertical: "2%" }}
        />
        <TouchableOpacity onPress={() => goBack()}>
          <AppText title={"Back"} fontSize={18} color="#fc4c01" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {}}
        onEndReachedThreshold={0.7}
        initialNumToRender={9}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={100}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.content}>
              <View style={styles.dotView} />
              <TouchableOpacity>
                <AppText
                  width={"85%"}
                  style={{ marginLeft: "2%" }}
                  fontSize={14}
                  title={item.repos_url}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: "3%",
              }}
            >
              <TouchableOpacity onPress={() => goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  style={{ marginLeft: "20%" }}
                />
              </TouchableOpacity>
              <AppText
                style={{ margin: "3%", marginHorizontal: "5%" }}
                title={"Your Organizations"}
                // textAlign="center"
                fontSize={18}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "1%",
    paddingVertical: "2%",
    width: "100%",
    marginLeft: "3.5%",
  },
  dotView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fc4c01",
  },
  noItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
};

export default DisplayOrgsScreen;
