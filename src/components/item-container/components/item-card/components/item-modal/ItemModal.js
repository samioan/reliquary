import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import Grid from "@material-ui/core/Grid";

import Modal from "@material-ui/core/Modal";

import {
  ModalHeader,
  ModalDescription,
  ModalAlbumContainer,
  ModalMedia,
} from "./components";
import styles from "./styles";

const ItemModal = ({
  title,
  genre,
  description,
  websiteLink,
  downloadLink,
  screenshots,
  video,
  albums,
  open,
  onClose,
  index,
}) => {
  const classes = styles();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modal}>
        <ModalHeader title={title} onClose={onClose} />

        <Scrollbars autoHeight autoHeightMin="80vh" autoHide>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            className={classes.contentContainer}
          >
            <ModalDescription
              description={description}
              genre={genre}
              websiteLink={websiteLink}
              downloadLink={downloadLink}
            />

            {index === 1 && <ModalAlbumContainer albums={albums} />}

            {index !== 1 && (
              <ModalMedia
                title={title}
                screenshots={screenshots}
                video={video}
              />
            )}
          </Grid>
        </Scrollbars>
      </div>
    </Modal>
  );
};

export { ItemModal };
export default ItemModal;
