/**
 * Copyright (c) 2020, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { IdentifiableComponentInterface, TestableComponentInterface } from "@wso2is/core/models";
import classNames from "classnames";
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { Tab, TabPaneProps } from "semantic-ui-react";

/**
 * Resource tab pane component Prop types.
 */
export interface ResourceTabPanePropsInterface extends TabPaneProps, IdentifiableComponentInterface,
    TestableComponentInterface {

    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Is the content segmentation handled from outside. 
     */
    controlledSegmentation?: boolean;
}


/**
 * Resource tab pane component.
 *
 * @param props - Props injected to the component.
 *
 * @returns the React component for the resource tab pane
 */
export const ResourceTabPane: FunctionComponent<PropsWithChildren<ResourceTabPanePropsInterface>> = (
    props: PropsWithChildren<ResourceTabPanePropsInterface>
): ReactElement => {

    const {
        children,
        className,
        controlledSegmentation,
        [ "data-componentid" ]: componentId,
        [ "data-testid" ]: testId,
        ...rest
    } = props;

    const classes = classNames(
        "resource-tab-pane",
        {
            "controlled-segments": controlledSegmentation
        },
        className
    );

    return (
        <Tab.Pane
            className={ classes }
            attached={ false }
            data-componentid={ componentId }
            data-testid={ testId }
            { ...rest }
        >
            { children }
        </Tab.Pane>
    );
};

/**
 * Default props for the resource tab pane component.
 */
ResourceTabPane.defaultProps = {
    attached: false,
    controlledSegmentation: false,
    "data-componentid": "resource-tab-pane",
    "data-testid": "resource-tab-pane"
};
