import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { string, icons } from "../../Resources";
import helpers from "../../utils/helpers";
import { InputField, FilledButton, HorizontalLine } from "..";
// import Entypo from "react-native-vector-icons/Entypo";

interface PostFieldProps {
  updatedCaption: (captions: string[]) => void; // Function to update caption
  currentSelectedCaption: { selectedCaption: string };
}

const PostField: React.FC<PostFieldProps> = ({
  updatedCaption,
  currentSelectedCaption,
}) => {
  const [descriptionText, setDescriptionText] = useState<string>(
    "Congratulations! Wishing you a lifetime of memories together. May your life as a married couple be filled with happiness. Cheers!"
  );
  const [makeItBetterIspressed, setMakeItBetterIspressed] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string[]>([]); // State for selected media

  const updateCaption = () => {
    setMakeItBetterIspressed(true);
    updatedCaption([
      "1)   Congratulations on your wedding day! 💍✨ Wishing you a lifetime of love, laughter, and countless beautiful memories together. May your journey as a married couple be filled with endless joy and happiness. Cheers to your forever! 🥂💕",
      "2)   Congratulations on your wedding day! 💍✨ Wishing you a lifetime of love, laughter, and countless beautiful memories together. May your journey as a married couple be filled with endless joy and happiness. Cheers to your forever! 🥂💕",
    ]);
  };

  useEffect(() => {
    console.log("currentSelectedCaption result", currentSelectedCaption);
    setDescriptionText(currentSelectedCaption.selectedCaption);
  }, [currentSelectedCaption]);

  const handleMediaSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "photo" | "video"
  ) => {
    const files = event.target.files;
    if (files) {
      const newMedia = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedMedia((prevMedia) => [...prevMedia, ...newMedia]);
    }
  };

  const removeMedia = (index: number) => {
    setSelectedMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <InputField
        placeholder={string.create_a_post_dummy_placeholder}
        backgroundColor={"white"}
        multiline={true}
        // multineTextFieldheight={styles.input}
        noBorder={true}
        fieldTextColor="#4E5D78"
        containerStyle={styles.input}
        value={descriptionText}
        onChangeText={(text: string) => setDescriptionText(text)}
      />

      <View style={styles.galleryContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(event) => handleMediaSelection(event, "photo")}
              />
              <Image source={icons.image_icon} style={styles.galleryIcon} />
            </label>
          </View>
          <View>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="file"
                accept="video/*"
                style={{ display: "none" }}
                onChange={(event) => handleMediaSelection(event, "video")}
              />
              <Image
                source={icons.video_icon}
                style={[styles.galleryIcon, styles.galleryVideoIcon]}
              />
            </label>
          </View>
        </View>

        <View>
          <FilledButton
            title={string.make_it_better}
            leftIconImage={icons.ai_logo}
            leftIconImageStyle={[
              styles.aiIcon,
              !makeItBetterIspressed && { tintColor: "#F5169C" },
            ]}
            containerStyle={[
              styles.makeBetterNonActive,
              !makeItBetterIspressed && styles.makeBetterBtn,
            ]}
            titleStyle={[
              styles.makeBetterText,
              !makeItBetterIspressed && { color: "#F5169C" },
            ]}
            onPress={updateCaption}
          />
        </View>
      </View>

      <View style={styles.imageListContainer}>
        {selectedMedia.length > 0 && (
          <>
            <HorizontalLine color="#FFEAF7" lineHeight={3}/>

            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingHorizontal: helpers.normalize(5),
              }}
            >
              {selectedMedia.map((uri, index) => (
                <View
                  key={index}
                  style={{ marginVertical: helpers.normalize(5) }}
                >
                  <View style={{ marginRight: helpers.normalize(10) }}>
                    <Image source={{ uri }} style={styles.image} />
                  </View>
                  <TouchableOpacity
                    style={styles.removeImage}
                    onPress={() => removeMedia(index)}
                  >
                    <Image
                      source={icons.round_filled_x_icon}
                      style={styles.removeImageIcon}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
};

export default PostField;
