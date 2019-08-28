# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Stack(pulumi.CustomResource):
    agent_version: pulumi.Output[str]
    """
    If set to `"LATEST"`, OpsWorks will automatically install the latest version.
    """
    arn: pulumi.Output[str]
    berkshelf_version: pulumi.Output[str]
    """
    If `manage_berkshelf` is enabled, the version of Berkshelf to use.
    """
    color: pulumi.Output[str]
    """
    Color to paint next to the stack's resources in the OpsWorks console.
    """
    configuration_manager_name: pulumi.Output[str]
    """
    Name of the configuration manager to use. Defaults to "Chef".
    """
    configuration_manager_version: pulumi.Output[str]
    """
    Version of the configuration manager to use. Defaults to "11.4".
    """
    custom_cookbooks_sources: pulumi.Output[list]
    """
    When `use_custom_cookbooks` is set, provide this sub-object as
    described below.
    
      * `password` (`str`)
      * `revision` (`str`)
      * `sshKey` (`str`)
      * `type` (`str`)
      * `url` (`str`)
      * `username` (`str`)
    """
    custom_json: pulumi.Output[str]
    """
    Custom JSON attributes to apply to the entire stack.
    """
    default_availability_zone: pulumi.Output[str]
    """
    Name of the availability zone where instances will be created
    by default. This is required unless you set `vpc_id`.
    """
    default_instance_profile_arn: pulumi.Output[str]
    """
    The ARN of an IAM Instance Profile that created instances
    will have by default.
    """
    default_os: pulumi.Output[str]
    """
    Name of OS that will be installed on instances by default.
    """
    default_root_device_type: pulumi.Output[str]
    """
    Name of the type of root device instances will have by default.
    """
    default_ssh_key_name: pulumi.Output[str]
    """
    Name of the SSH keypair that instances will have by default.
    """
    default_subnet_id: pulumi.Output[str]
    """
    Id of the subnet in which instances will be created by default. Mandatory
    if `vpc_id` is set, and forbidden if it isn't.
    """
    hostname_theme: pulumi.Output[str]
    """
    Keyword representing the naming scheme that will be used for instance hostnames
    within this stack.
    """
    manage_berkshelf: pulumi.Output[bool]
    """
    Boolean value controlling whether Opsworks will run Berkshelf for this stack.
    """
    name: pulumi.Output[str]
    """
    The name of the stack.
    """
    region: pulumi.Output[str]
    """
    The name of the region where the stack will exist.
    """
    service_role_arn: pulumi.Output[str]
    """
    The ARN of an IAM role that the OpsWorks service will act as.
    """
    stack_endpoint: pulumi.Output[str]
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    use_custom_cookbooks: pulumi.Output[bool]
    """
    Boolean value controlling whether the custom cookbook settings are
    enabled.
    """
    use_opsworks_security_groups: pulumi.Output[bool]
    """
    Boolean value controlling whether the standard OpsWorks
    security groups apply to created instances.
    """
    vpc_id: pulumi.Output[str]
    """
    The id of the VPC that this stack belongs to.
    """
    def __init__(__self__, resource_name, opts=None, agent_version=None, berkshelf_version=None, color=None, configuration_manager_name=None, configuration_manager_version=None, custom_cookbooks_sources=None, custom_json=None, default_availability_zone=None, default_instance_profile_arn=None, default_os=None, default_root_device_type=None, default_ssh_key_name=None, default_subnet_id=None, hostname_theme=None, manage_berkshelf=None, name=None, region=None, service_role_arn=None, tags=None, use_custom_cookbooks=None, use_opsworks_security_groups=None, vpc_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an OpsWorks stack resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] agent_version: If set to `"LATEST"`, OpsWorks will automatically install the latest version.
        :param pulumi.Input[str] berkshelf_version: If `manage_berkshelf` is enabled, the version of Berkshelf to use.
        :param pulumi.Input[str] color: Color to paint next to the stack's resources in the OpsWorks console.
        :param pulumi.Input[str] configuration_manager_name: Name of the configuration manager to use. Defaults to "Chef".
        :param pulumi.Input[str] configuration_manager_version: Version of the configuration manager to use. Defaults to "11.4".
        :param pulumi.Input[list] custom_cookbooks_sources: When `use_custom_cookbooks` is set, provide this sub-object as
               described below.
        :param pulumi.Input[str] custom_json: Custom JSON attributes to apply to the entire stack.
        :param pulumi.Input[str] default_availability_zone: Name of the availability zone where instances will be created
               by default. This is required unless you set `vpc_id`.
        :param pulumi.Input[str] default_instance_profile_arn: The ARN of an IAM Instance Profile that created instances
               will have by default.
        :param pulumi.Input[str] default_os: Name of OS that will be installed on instances by default.
        :param pulumi.Input[str] default_root_device_type: Name of the type of root device instances will have by default.
        :param pulumi.Input[str] default_ssh_key_name: Name of the SSH keypair that instances will have by default.
        :param pulumi.Input[str] default_subnet_id: Id of the subnet in which instances will be created by default. Mandatory
               if `vpc_id` is set, and forbidden if it isn't.
        :param pulumi.Input[str] hostname_theme: Keyword representing the naming scheme that will be used for instance hostnames
               within this stack.
        :param pulumi.Input[bool] manage_berkshelf: Boolean value controlling whether Opsworks will run Berkshelf for this stack.
        :param pulumi.Input[str] name: The name of the stack.
        :param pulumi.Input[str] region: The name of the region where the stack will exist.
        :param pulumi.Input[str] service_role_arn: The ARN of an IAM role that the OpsWorks service will act as.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[bool] use_custom_cookbooks: Boolean value controlling whether the custom cookbook settings are
               enabled.
        :param pulumi.Input[bool] use_opsworks_security_groups: Boolean value controlling whether the standard OpsWorks
               security groups apply to created instances.
        :param pulumi.Input[str] vpc_id: The id of the VPC that this stack belongs to.
        
        The **custom_cookbooks_sources** object supports the following:
        
          * `password` (`pulumi.Input[str]`)
          * `revision` (`pulumi.Input[str]`)
          * `sshKey` (`pulumi.Input[str]`)
          * `type` (`pulumi.Input[str]`)
          * `url` (`pulumi.Input[str]`)
          * `username` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/opsworks_stack.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['agent_version'] = agent_version
            __props__['berkshelf_version'] = berkshelf_version
            __props__['color'] = color
            __props__['configuration_manager_name'] = configuration_manager_name
            __props__['configuration_manager_version'] = configuration_manager_version
            __props__['custom_cookbooks_sources'] = custom_cookbooks_sources
            __props__['custom_json'] = custom_json
            __props__['default_availability_zone'] = default_availability_zone
            if default_instance_profile_arn is None:
                raise TypeError("Missing required property 'default_instance_profile_arn'")
            __props__['default_instance_profile_arn'] = default_instance_profile_arn
            __props__['default_os'] = default_os
            __props__['default_root_device_type'] = default_root_device_type
            __props__['default_ssh_key_name'] = default_ssh_key_name
            __props__['default_subnet_id'] = default_subnet_id
            __props__['hostname_theme'] = hostname_theme
            __props__['manage_berkshelf'] = manage_berkshelf
            __props__['name'] = name
            if region is None:
                raise TypeError("Missing required property 'region'")
            __props__['region'] = region
            if service_role_arn is None:
                raise TypeError("Missing required property 'service_role_arn'")
            __props__['service_role_arn'] = service_role_arn
            __props__['tags'] = tags
            __props__['use_custom_cookbooks'] = use_custom_cookbooks
            __props__['use_opsworks_security_groups'] = use_opsworks_security_groups
            __props__['vpc_id'] = vpc_id
            __props__['arn'] = None
            __props__['stack_endpoint'] = None
        super(Stack, __self__).__init__(
            'aws:opsworks/stack:Stack',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, agent_version=None, arn=None, berkshelf_version=None, color=None, configuration_manager_name=None, configuration_manager_version=None, custom_cookbooks_sources=None, custom_json=None, default_availability_zone=None, default_instance_profile_arn=None, default_os=None, default_root_device_type=None, default_ssh_key_name=None, default_subnet_id=None, hostname_theme=None, manage_berkshelf=None, name=None, region=None, service_role_arn=None, stack_endpoint=None, tags=None, use_custom_cookbooks=None, use_opsworks_security_groups=None, vpc_id=None):
        """
        Get an existing Stack resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] agent_version: If set to `"LATEST"`, OpsWorks will automatically install the latest version.
        :param pulumi.Input[str] berkshelf_version: If `manage_berkshelf` is enabled, the version of Berkshelf to use.
        :param pulumi.Input[str] color: Color to paint next to the stack's resources in the OpsWorks console.
        :param pulumi.Input[str] configuration_manager_name: Name of the configuration manager to use. Defaults to "Chef".
        :param pulumi.Input[str] configuration_manager_version: Version of the configuration manager to use. Defaults to "11.4".
        :param pulumi.Input[list] custom_cookbooks_sources: When `use_custom_cookbooks` is set, provide this sub-object as
               described below.
        :param pulumi.Input[str] custom_json: Custom JSON attributes to apply to the entire stack.
        :param pulumi.Input[str] default_availability_zone: Name of the availability zone where instances will be created
               by default. This is required unless you set `vpc_id`.
        :param pulumi.Input[str] default_instance_profile_arn: The ARN of an IAM Instance Profile that created instances
               will have by default.
        :param pulumi.Input[str] default_os: Name of OS that will be installed on instances by default.
        :param pulumi.Input[str] default_root_device_type: Name of the type of root device instances will have by default.
        :param pulumi.Input[str] default_ssh_key_name: Name of the SSH keypair that instances will have by default.
        :param pulumi.Input[str] default_subnet_id: Id of the subnet in which instances will be created by default. Mandatory
               if `vpc_id` is set, and forbidden if it isn't.
        :param pulumi.Input[str] hostname_theme: Keyword representing the naming scheme that will be used for instance hostnames
               within this stack.
        :param pulumi.Input[bool] manage_berkshelf: Boolean value controlling whether Opsworks will run Berkshelf for this stack.
        :param pulumi.Input[str] name: The name of the stack.
        :param pulumi.Input[str] region: The name of the region where the stack will exist.
        :param pulumi.Input[str] service_role_arn: The ARN of an IAM role that the OpsWorks service will act as.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[bool] use_custom_cookbooks: Boolean value controlling whether the custom cookbook settings are
               enabled.
        :param pulumi.Input[bool] use_opsworks_security_groups: Boolean value controlling whether the standard OpsWorks
               security groups apply to created instances.
        :param pulumi.Input[str] vpc_id: The id of the VPC that this stack belongs to.
        
        The **custom_cookbooks_sources** object supports the following:
        
          * `password` (`pulumi.Input[str]`)
          * `revision` (`pulumi.Input[str]`)
          * `sshKey` (`pulumi.Input[str]`)
          * `type` (`pulumi.Input[str]`)
          * `url` (`pulumi.Input[str]`)
          * `username` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/opsworks_stack.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["agent_version"] = agent_version
        __props__["arn"] = arn
        __props__["berkshelf_version"] = berkshelf_version
        __props__["color"] = color
        __props__["configuration_manager_name"] = configuration_manager_name
        __props__["configuration_manager_version"] = configuration_manager_version
        __props__["custom_cookbooks_sources"] = custom_cookbooks_sources
        __props__["custom_json"] = custom_json
        __props__["default_availability_zone"] = default_availability_zone
        __props__["default_instance_profile_arn"] = default_instance_profile_arn
        __props__["default_os"] = default_os
        __props__["default_root_device_type"] = default_root_device_type
        __props__["default_ssh_key_name"] = default_ssh_key_name
        __props__["default_subnet_id"] = default_subnet_id
        __props__["hostname_theme"] = hostname_theme
        __props__["manage_berkshelf"] = manage_berkshelf
        __props__["name"] = name
        __props__["region"] = region
        __props__["service_role_arn"] = service_role_arn
        __props__["stack_endpoint"] = stack_endpoint
        __props__["tags"] = tags
        __props__["use_custom_cookbooks"] = use_custom_cookbooks
        __props__["use_opsworks_security_groups"] = use_opsworks_security_groups
        __props__["vpc_id"] = vpc_id
        return Stack(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

