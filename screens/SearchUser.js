import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import AppButton from "../components/AppButton";
import {
  useFetchOrganizationsMutation,
  useFetchReposMutation,
} from "../redux/services/apiService";
import * as toast from "../components/utils/toast";

const SearchUserScreen = ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState("");
  const [showAction, setShowAction] = useState("repos");

  const [fetchRepos, { isLoading: loadingRepos, error: error1 }] =
    useFetchReposMutation();
  const [fetchOrganizations, { isLoading: loadingOrgs, error: error2 }] =
    useFetchOrganizationsMutation();

  //fetch
  const handleSearchRepo = async () => {
    await fetchRepos(username)
      .unwrap()
      .then((res) => {
        navigate(`repos`, { data: res });
      })
      .catch((err) => {
        console.log(err);
        toast.error("User not found");
      });
  };
  const handleSearchOrganizations = async (e) => {
    await fetchOrganizations(username)
      .unwrap()
      .then((res) => {
        navigate(`orgs`, { data: res });
      })
      .catch((err) => {
        console.log(err);
        toast.error("User not found");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginTop: "20%", fontSize: 20 }]}>
        Welcome to githubfinder
      </Text>

      {showAction === "repos" ? (
        <Text style={[styles.title, { marginTop: "20%" }]}>
          Find your github Repositories
        </Text>
      ) : (
        <Text style={[styles.title, { marginTop: "20%" }]}>
          Find your github Organizations
        </Text>
      )}
      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => setShowAction("repos")}
          color={showAction === "repos" ? "#828282" : "#fff"}
          textColor={showAction === "repos" ? "#fff" : "#333"}
          borderColor={showAction === "repos" ? "#fff" : "#C4C4C4"}
          borderWidth={1}
          width="20%"
          title={"Repos"}
        />
        <AppButton
          onPress={() => setShowAction("orgs")}
          color={showAction === "orgs" ? "#828282" : "#fff"}
          textColor={showAction === "orgs" ? "#fff" : "#333"}
          borderColor={showAction === "orgs" ? "#fff" : "#C4C4C4"}
          borderWidth={1}
          width="33%"
          ml={"2%"}
          title={"Organizations"}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.inputName}
          placeholder="Enter your github username"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <AppButton
        onPress={
          showAction === "repos" ? handleSearchRepo : handleSearchOrganizations
        }
        indicator={
          loadingRepos || loadingOrgs ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : null
        }
        disabled={username.length === 0}
        width="70%"
        title={
          showAction === "repos"
            ? "Search Repositories"
            : "Search Organizations"
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "2%",
    borderRadius: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#c4c4c4",
    width: "70%",
    marginVertical: "4%",
  },
  inputName: {
    width: "100%",
    fontSize: 16,
    color: "#333",
  },
  title: {
    fontSize: 18,
    marginBottom: "7%",
  },
  btnContainer: {
    flexDirection: "row",
  },
});

export default SearchUserScreen;
