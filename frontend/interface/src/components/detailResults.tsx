import React, { useState, useEffect } from "react";
import { Row } from "./resutados";
import Vrt from "./vrt";
import {
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
} from "@material-ui/core";
interface Props {
  row: Row;
}
const DetailResults = (props: Props) => {
  const [isVrt, setIsVrt] = useState(false);
  const [isBDT, setIsBDT] = useState(false);
  const [isFeature, setIsFeature] = useState(false);
  useEffect(() => {
    if (props.row.typeOfTest === "VRT") {
      setIsVrt(true);
      console.log(props.row.data, "detail");
    } else {
      setIsVrt(false);
    }
    if (props.row.typeOfTest === "BDT") {
      setIsBDT(true);
    } else {
      setIsBDT(false);
    }
    if (props.row.typeOfTest === "Feature Testing") {
      setIsFeature(true);
    } else {
      setIsFeature(false);
    }
  }, [props]);
  return (
    <>
      {isVrt ? (
        <Vrt results={props.row.data} />
      ) : isBDT ? (
        <Grid container justify="center">
          <Typography>{props.row.data.name}</Typography>

          <List>
            {props.row.data.elements.map((scenario: any) => {
              return (
                <ListItem>
                  <ListItemText>name: {scenario.name} </ListItemText>
                  <List>
                    {scenario.steps.map((step: any) => {
                      return (
                        <ListItem>
                          <ListItemText>
                            steps name: {step.name}, result :{" "}
                            {step.result.status}
                          </ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      ) : isFeature ? (
        <Grid container justify="center">
        <Typography>Total Failed: {props.row.data.totalFailed}</Typography>
        <Typography>Total Passed: {props.row.data.totalPassed}</Typography>
        <Typography>Total Pending: {props.row.data.totalPending}</Typography>
        <Typography>Total Skipped: {props.row.data.totalSkipped} </Typography>
        <Typography>Total Suites: {props.row.data.totalSuites}</Typography>
        <Typography>Total Tests: {props.row.data.totalTests}</Typography>
        </Grid>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default DetailResults;
